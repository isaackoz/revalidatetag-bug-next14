import { NextResponse, NextRequest } from "next/server";
import { revalidateTag } from "next/cache";

export async function POST(request: NextRequest) {
  revalidateTag("test");

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
