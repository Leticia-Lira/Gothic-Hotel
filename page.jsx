import React from 'react';
import Link from "next/link";
import Image from 'next/image';
import Topo from '@/app/componentes/Topo/index.jsx';
import styles from '@/app/quarto/quarto.module.css';

export default function Quarto(){
    return(

        <main className={styles.main}>
            <Topo/>


            <div className={styles.imagens}>
                <Image src="/imagens/quarto2.jpg"
                width={350}
                height={400}/>

                <Image src="/imagens/quarto3.jpg"
                width={350}
                height={400}/>

                <Image src="/imagens/quarto4.jpg"
                width={350}
                height={400}/>

                <Image src="/imagens/quarto.jpg"
                width={310}
                height={400}/>
            </div>

            <div className={styles.link_voltar}>
                <Link className={styles.botao} href="/">Back</Link>
            </div>
        </main>
    )
}