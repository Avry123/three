'use client'

export default  function page({title,message} : {title: string, message: string}) {
        
    const handleClick = () => {
        // Dispatch the action with the title and message as payload
        // dispatch(setTitleAndMessage({ title, message }));
        console.log('great');
      };
    
    return (
            <button className="w-full bg-slate-400 text-black font-bold" 
            onClick={handleClick}
            >
                Add +
            </button>
        )
}