'use client'
import {minus} from '../app/actions/optimisticHook'

export default function page({no} : {no: number}) {
        return (
            <button className="px-8 py-4 text-2xl font-bold bg-white rounded-md" onClick={() => minus(no)}>Minus -</button>
        )
}