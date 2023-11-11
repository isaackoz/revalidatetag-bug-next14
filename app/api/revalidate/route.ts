import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  revalidateTag("test");

  return Response.json({ revalidated: true, now: Date.now() });
}
