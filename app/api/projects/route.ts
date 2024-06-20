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

    const newProject = await prisma.project.create({

        data:{
            title: body.title,
            description: body.description,
            startDate: body.startDate,
            endDate: body.endDate,
            budget: body.budget
         }
    });

    return res.json(newProject, {status: 201})
}

export async function GET(req: NextRequest) {

    const projects = await prisma.project.findMany();
    return res.json(projects, {status: 200});
}