import {z, ZodType} from "zod"

export type FormFields = {
    name: string;
    email: string;
    password: string;
}

export const formSchema: ZodType<FormFields> = z.object({
    name: z.string().regex(/^[a-zA-Z]+$/, {message: 'Please enter a valid name'}),
    email: z.string().email(),
    password: z.string().min(8),
});




