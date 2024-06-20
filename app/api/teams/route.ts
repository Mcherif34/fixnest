import { projectSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { now } from "next-auth/client/_utils";
import { NextRequest, NextResponse } from "next/server";

const res = NextResponse;

export async function POST(req: NextRequest) {

    const body = await req.json();

    const validation = projectSchema.safeParse(body);

    if(!validation.success)
        return res.json(validation.error.format(), {status: 400});

    const newTeam = await prisma.team.create({

        data:{
            name: body.name,
            projectId: body.projectId,
        },
        // include: {
        //     team_members: true,
        //     teams: true,
        // },
    });

    return res.json(newTeam, {status: 201})
}

export async function GET(req: NextRequest) {

    const teams = await prisma.team.findMany();
    return res.json(teams, {status: 200});
}