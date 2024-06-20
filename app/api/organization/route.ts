import { organizationSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const response = NextResponse;

export async function POST(request: NextRequest) {
    const body = await request.json();

    const validation = organizationSchema.safeParse(body);

    if(!validation.success)
        return response.json(validation.error.format(), {status: 400});

    const newOrg = await prisma.organization.create({
        data: {
            name: body.name,
            responsable: body.responsable,
            website: body.website,
            address: body.address,
            email: body.email,
            phone: body.phone
        }
    });

    return response.json(newOrg.id, {status: 201});
}