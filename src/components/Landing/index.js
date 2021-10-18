import React, { useRef, useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom'

const Landing = () => {

    const [btn, setBtn] = useState(false);

    const refWolverine = useRef(null);
    
    useEffect(() => {
        refWolverine.current.classList.add("startingImg");
        setTimeout(() => {
            refWolverine.current.classList.remove("startingImg");
            setBtn(true)
        });

    }, [])

   

    const displayBtn = btn && (
        <Fragment>
            <div  className="leftBox">
                <Link className="btn-welcome " to="/signup">Inscription</Link>
            </div>
            <div  className="rightBox">
                <Link className="btn-welcome " to="/login">Connexion</Link>
            </div>
        </Fragment>
    )

    return (
        <main ref={refWolverine} className="welcomePage">
            { displayBtn }
        </main>
    )
}

export default Landing
