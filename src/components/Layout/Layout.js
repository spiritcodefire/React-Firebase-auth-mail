import React from 'react'
import Header from "../Header/index"
import Footer from "../Footer/index"

const Layout = ({children, footer, header}) => {
    return (
        <>
            {header && 
               <Header /> 
            }
            


            {children}


            {footer && 
                < Footer />
            }
            

        </>
    )
}

export default Layout
