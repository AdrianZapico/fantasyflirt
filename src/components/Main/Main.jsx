import React from "react"
import { MainStyled, Text, DivImage } from "./Styles"
import Image from 'next/image'
import nova from "../../assets/images/nova.png"
import { useState } from "react"


export default function Main() {

    const [hide, setHide] = useState(false)

    return (
        <>
        
            
            <MainStyled>
            <Text onClick={()=> setHide(!hide)}
            >Erotic tales created by A.I...</Text>
                
                <DivImage>{hide &&
                           <Image src={nova}
                           width={350}
                           height={150} />
                    }
                 
                </DivImage>


            </MainStyled>
            
        </>
    )
}