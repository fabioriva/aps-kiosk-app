import { PUBLIC_API } from "$env/static/public";
import { json } from "@sveltejs/kit";

export async function GET({ request }) {
  const params = new URL(request.url).searchParams
  const pin = params.get('pin') // 'xyz'
  const url = PUBLIC_API + "/pin";
  const res = await fetch(url, {
    method: "POST",
    body: JSON.stringify({ pin }),
  });
  const data = await res.json();
  console.log(`submitted ${pin}`, pin.length);
  return json(data);
}