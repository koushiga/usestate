import { useState } from "react";

const Use=()=>{
    // const[count,setCount]=useState(0);

    // function incrementCount(){
    //     setCount(count+1);
    // }
    // function decrementCount(){
    //     setCount(count>0?count-1:0);
    // }


    const[signin,setsigin]=useState(false);
    const[signout,setsignout]=useState(false);

    function handleClick(){
        setsigin(signin?false:true);
        setsignout(signout?false:true);
    }
    return(
        <div>
            {/* <h1>{count}</h1> */}
            {/* <button onClick={incrementCount}>Increment</button>
            <button onClick={decrementCount}>Decrement</button> */}
            <button onClick={handleClick}>{signin?"sign out":"sign in"}</button>
            <p>{signin?"you're welcome":"please signin"}</p>
        </div>
    )
}

export default Use;