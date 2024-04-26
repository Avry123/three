export default async function Fetch() {

    let res = await fetch('https://66112f5c95fdb62f24ecab0d.mockapi.io/TitleMessage');

    let data = await res.json();
    
    return (
        <div className="max-h-screen overflow-y-auto">
            {JSON.stringify(data)}
        </div>
    )
}