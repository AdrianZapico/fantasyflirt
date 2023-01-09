
import Image from 'next/image'
import Logo from "../../assets/images/logo.png"
import Header from "../Header/Header"
import { DivNav } from'./Styles'

export default function Nav() {
    return (
        <div>
            <nav>
                <DivNav>
                <Image src={Logo}
                 width={350}
                 height={110} />
                
                <Header />
                </DivNav>
            </nav>

        </div>
    )
}