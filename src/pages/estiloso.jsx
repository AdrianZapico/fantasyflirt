import styles from '../styles/Estiloso.module.css'
import Link from "next/link"

export default function Estiloso(){

    return (
    <>
    <div className={styles.general}>
        <Link href={'/'}>
            Back
        </Link>
    <h1>Aquele Cara</h1>
    <p>Puto</p>
    <p>marrento</p>
    <p>Cheiroso</p>
    <p>emposturado</p>
    </div>
    </>
    )
}