import { z } from 'zod';

export const organizationSchema = z.object({
    name: z.string().min(1, 'Nom requis.').max(255),
    address: z.string(),
    email: z.string().email("Email invalide"),
    phone: z.string().min(10, "Saisir au moins de 10 chiffres").max(12, "Pas plus de 10 chiffres"),
    responsable: z.string().min(1, "Le nom du représentant est requis."),
    website: z.string().min(0)
});

export const issueSchema = z.object({
    title: z.string().min(1, 'Titre obligatoire'),
    description: z.string().min(1, 'Description obligatoire'),
})

export const projectSchema = z.object({
    title: z.string().min(1, 'Nom requis'),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string(),
    budget: z.string(),
})