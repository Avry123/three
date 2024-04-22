

interface paramSchem {
    no: string;
}

interface propsSchema {
    params: paramSchem;
    searchParams: any;
}


export default function Story({params}: propsSchema) {
    console.log(params);
    return (
        <div>
            <h1>Hello This is [page]</h1>
        </div>
    )
}