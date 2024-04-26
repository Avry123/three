"use client";
import { useFormStatus } from "react-dom";

export default function Page() {
  const { pending } = useFormStatus();

  return (
    <div>
      <button
        className="p-4 bg-white font-bold rounded-md my-4 block mx-auto"
        type="submit"
      >{pending ? (
        <p>...Adding</p>
      ) : (
        <p>Add</p>
      )}</button>
    </div>
  );
}
