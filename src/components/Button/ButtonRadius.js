import React from 'react'
import Button from 'react-bootstrap/Button'

const ButtonComponant = (props) => {
    return (
        <>
            <div className="d-grid gap-2 container ">
                <Button className={`rounded-pill ${props.colorTextButton} mx-4 `} size="lg"  variant={`${props.variant}`}>{props.nameButton}</Button>
            </div>
        </>
    )
}

export default ButtonComponant
