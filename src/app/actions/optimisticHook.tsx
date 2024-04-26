"use server"

import { revalidatePath } from "next/cache"

type DataType = {
    // Define the structure of the expected data
    id: number;
    likes: number;
    // Add other expected fields
};


export async function add(no: number) {
    console.log("Initial likes:", no);

    let res = await fetch('https://662b4213de35f91de157a7af.mockapi.io/likes')
    let data : DataType[] = await res.json()
    if (!data) return 
    const newAdd = data[0].likes + no;
    console.log("Updated likes:", newAdd);
  
    try {
      const response = await fetch('https://662b4213de35f91de157a7af.mockapi.io/likes/1', {
        method: 'PUT', // Note the uppercase
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          likes: newAdd,
        }),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update likes");
      }
  
      console.log("Successfully updated likes");
  
      // Call revalidatePath if using Next.js and it supports revalidation
      revalidatePath('likes'); 
    } catch (error) {
      console.error("Error updating likes:", error);
    }
  }

  export async function minus(no: number) {
    let res = await fetch('https://662b4213de35f91de157a7af.mockapi.io/likes')
    let data : DataType[] = await res.json()
    if (!data) return 
    const newMinus = Math.max(data[0].likes - no)

    console.log("New value after subtraction:", newMinus);
    // Send a PUT request to update the likes
    await fetch('https://662b4213de35f91de157a7af.mockapi.io/likes/1', {
        method: 'PUT', // Use 'PUT' to update an existing resource
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            likes: newMinus,
        }),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Failed to update likes');
        }
        return response.json();
    })
    .then(data => {
        console.log("Update successful:", data);
    })
    .catch(error => {
        console.error("Error updating likes:", error);
    });

    // Revalidate the path if needed
    revalidatePath('likes');
}