import React from 'react'
import Header from "../Header/index"
import Footer from "../Footer/index"

const LayoutParticuliers = ({children, footer, header}) => {
    return (
        <>

            {header && <Header /> }
            
            {children}

            {footer && < Footer /> }
            
        </>
    )
}

export default LayoutParticuliers
