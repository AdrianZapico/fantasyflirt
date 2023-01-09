import Link from "next/link"
import {Topics, DivLinks} from'./Styles'

export default function Header() {
    return (
        <div>
            
            
            
                <DivLinks>
                    <Link href={'/'}>
                    <Topics>Home</Topics>
                    </Link>
                    <Link href={'/stories'}>
                    <Topics>Stories</Topics>
                    </Link>
                    <Link href={'/contact'}>
                    <Topics >Contact</Topics>
                    </Link>
                </DivLinks>
             
           
            

        </div>
    )
}