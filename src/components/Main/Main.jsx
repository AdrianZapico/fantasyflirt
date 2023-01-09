import React from "react"
import { MainStyled, Text, DivImage, Info, Content, Topics, DivLink, Divy } from "./Styles"
import Link from "next/link"
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
                
                <Content>
                <DivImage>{hide &&
                           <Image src={nova}
                           width={350}
                           height={150} 
                           
                           />
                    }
                 
                </DivImage>
               
                <Info>{hide &&
                <Divy>
                <p>Preparados(as) para ouvir histórias quentes criadas por uma
                    inteligência artificial?
                </p>
                   <p>Todos os contos foram gerados por uma intêligência artificial
                    com pequenos toques humanos para deixar a experiência mais
                    imersiva e realista</p> 
                    <p>
                    Espero que desfrute dessa maravilha proporcionada pela imaginação e
                    a tecnologia da informação.
                    Faca bom proveito.
                    </p>
                    <strong>  Abraços, Adrian!!!</strong>
                   <DivLink>
                    <Link href={'/stories'}>
                    <Topics>Stories</Topics>
                    </Link>
                    </DivLink>
                </Divy>
                }
                </Info>
                </Content>
                
               


            </MainStyled>
            
        </>
    )
}