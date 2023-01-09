import React from "react"
import { FooterStyled, Text, Spin } from "../Footer/Styles"
import Image from 'next/image'
import pepper from "../../assets/images/pepper.png"



export default function Footer() {

    return (
        <>


            <FooterStyled>
                <Spin>
                    <Image src={pepper}
                        width={50}
                        height={30} />
                </Spin>
                <Text>All credits reserved Adrian Zapico & OpenIA</Text>
            </FooterStyled>

        </>
    )
}