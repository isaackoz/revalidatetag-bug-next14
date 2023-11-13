import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET(request: Request) {
  revalidateTag("test");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
