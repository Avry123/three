'use client'
import AddButton from "@/components/AddButton"
import MinusButton from "@/components/MinusButton"
import { useOptimistic } from "react";

export default function page({likes} : {likes: number}) {
    const [optimisticLikes,addOptimisticLikes] = useOptimistic(
        likes,
        ({state,amount}:any) => state + Number(amount)
    )


    const updateLikes = async (amount: number) => {
        addOptimisticLikes(amount)
        await addOrMinus(amount);
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center space-x-4">
           <button className="px-8 py-4 text-2xl font-bold bg-white rounded-md" onClick={() => updateLikes(1)}>Add +</button>
            <p className="text-8xl">{likes}</p>
            <button className="px-8 py-4 text-2xl font-bold bg-white rounded-md" onClick={() => updateLikes(-1)}>Minus -</button>
        </div>
    )
}