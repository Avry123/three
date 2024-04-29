"use server";
import { revalidateTag } from "next/cache";

export const handleSubmit = async (e: FormData) => {
  let title = e.get("Title")?.toString();
  let message = e.get("Message")?.toString();
  if (!title || !message) return;

  const dataToPost = {
    Title: title,
    Message: message,
  };

  await fetch("https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToPost),
  });

  revalidateTag("TitleMessage");
};

interface dataSchem {
  Title: string;
  Message: string;
  
}

export async function fetchData() : Promise<dataSchem[]> {
  let res = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage')
  let data : dataSchem[] = await res.json()
  return data
}

 
