import { projectSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

const response = NextResponse

export async function PATCH(request: NextRequest, { params} : { params : {id:string} }) {

    const body = await request.json();

    const validation = projectSchema.safeParse(body);

    if(!validation.success) 
        return response.json(validation.error.format(), {status: 400});

        const project = await prisma.project.findUnique({
            where:{ id: params.id },
        });

        if(!project) 
            return response.json({error : 'Projet introuvable'}, {status: 400});

        const updatedProject = await prisma.project.update({
            where: { id: project.id},
            data: {
                title: body.title,
                description: body.description,
                startDate: body.startDate,
                endDate: body.endDate,
                budget: body.budget
            }
        });
      return response.json(updatedProject, {status: 201});  
}

export async function DELETE(request: NextRequest, { params }: {params: {id:string}}){

    const project = await prisma.project.findUnique({
        where: {id: params.id}
    });

    if(!project)
        return response.json({ error : 'Projet introuvable' },{ status: 400});

    await prisma.project.delete({
        where: { id: project.id }
    });

    return response.json({});
}