import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { exec } from "child_process";

export const actions = {
	default: async ({request}) => {
    // console.log(request);
    const data = await request.formData();
    const ip = data.get('ip') as string;
    const mask = data.get('mask') as string;
    const gateway = data.get('gateway') as string;
    const dns = data.get('dns') as string;
    const cmd = `
        sudo nmcli connection modify "Wired connection 1" ipv4.addresses "${ip}/${mask}";
        sudo nmcli connection modify "Wired connection 1" ipv4.gateway "${gateway}";
        sudo nmcli connection modify "Wired connection 1" ipv4.dns "${dns.split(" ").join(", ")}";
        sudo nmcli connection modify "Wired connection 1" ipv4.method manual;
        sudo nmcli device down eth0;
        sudo nmcli device up eth0;
      `;
      console.log(cmd);
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          console.error("Error:", stderr);
          return { error: true };
        }
        else {
          console.log("Updated:", stdout);
          redirect(302, "/")
        }
      });
	}
} satisfies Actions;