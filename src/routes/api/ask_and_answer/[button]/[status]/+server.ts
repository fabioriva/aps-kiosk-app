import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";
// import { URL } from "url";

export async function GET({ url }) {
  // console.log(request);
  // console.log(url);
  // console.log(url.pathname.split("/"));
  const button = url.pathname.split("/").at(-2) || "cancel";
  const status = url.pathname.split("/").at(-1) || "0";
  // const status = new URL(request.url).pathname.split("/").pop();
  // console.log(button, status);
  // const res = await fetch(PUBLIC_API + "/cancel/" + parseInt(status));
  const uri = `${PUBLIC_API}/${button}/${parseInt(status)}`;
  const res = await fetch(uri);
  const data = await res.json();
  return json(data);
}
