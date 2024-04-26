"use server"
import { revalidateTag } from "next/cache";

export default async function handleSubmit(e:FormData) {
        const content = e.get('content');
        if (!content) return;
        
        const dataToPost = {
            "message": content,
        }

        try {
            await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/todo',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(dataToPost),
            })
        } catch (e) {
            return {
                error: e,
            };
        }

        
        
        revalidateTag('todo');
}