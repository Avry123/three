'use client'
import {add} from '../app/actions/optimisticHook'

export default function addButton({no} : {no: number}) {
        return (
            <button className="px-8 py-4 text-2xl font-bold bg-white rounded-md" onClick={() => add(no)}>Add +</button>
        )
}