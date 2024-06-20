import { baseUrl } from "@/config/api";
import prisma from "@/prisma/client"
import { $Enums } from "@prisma/client";
import axios from "axios";

export type Project = {
    id: string;
    title: string;
    description: string | null;
    status: $Enums.Status;
    startDate: string;
    endDate: string | null;
    budget: string | null;
    createdAt: Date;
    updatedAt: Date;
}

const projectBaseUrl = "/api/projects"; 

export const getAllProject = async () => {

    try{

        const response = await axios.get(baseUrl+projectBaseUrl);
        return response.data;

    } catch(err){
        console.error('Erreur : ', err);
    }
};