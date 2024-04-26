import { revalidatePath } from "next/cache"
import { add } from "../actions/optimisticHook"
import {minus} from "../actions/optimisticHook"
import AddButton from "@/components/AddButton"
import MinusButton from "@/components/MinusButton"
import { useOptimistic } from "react"

interface data {
    id: string;
    likes: number;
}

export default async function page() {
    let res = await fetch('https://662b4213de35f91de157a7af.mockapi.io/likes')
    let data : data[] = await res.json()


    return (
        <div className="w-screen h-screen flex justify-center items-center space-x-4">
            <AddButton no={1} />
            <p className="text-8xl">{data[0].likes}</p>
            <MinusButton no={1} />
        </div>
    )
}