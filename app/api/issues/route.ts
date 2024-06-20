import { NextRequest, NextResponse } from "next/server";

const res = NextResponse;

export async function POST(req: NextRequest) {

    const body = await req.json();
}