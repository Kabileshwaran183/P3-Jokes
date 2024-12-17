import React from 'react'
export default function Joke(props) {
    const [isShown,setShown] = React.useState(false)
    function handleShown(){
        setShown(prevShow=>!prevShow)
    }
    return (
        <>
            {props.setup && <p className="setup">Setup: {props.setup}</p>}
            {isShown && <p className="punchline">Punchline: {props.punchline}</p>}
            <button onClick={handleShown}>{isShown? "Hide" : "Show"} Punchline</button>
            <hr />
        </>
    )
}