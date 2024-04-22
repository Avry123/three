import { Metadata } from "next";



interface paramSchem {
    no: string;
}

interface propsSchema {
    params: paramSchem;
    searchParams: any;
}

export const generateMetadata = ({params} : propsSchema) : Metadata => {
    return {
        title: `Title MEtadata`
    }
}


export default function Story({params}: propsSchema) {
    console.log(params);
    return (
        <div>
            <h1>Hello This is {params.no}</h1>
        </div>
    )
}