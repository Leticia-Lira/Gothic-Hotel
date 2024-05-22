import styles from '@/app/novapagina/sala.module.css';
import Link from "next/link";
import Image from 'next/image';
import Topo from "@/app/componentes/Topo/index.jsx";


export default function NovaPagina(){
    return(
       <main className={styles.main}>
        
        <Topo/>
        
        <div className={styles.imagens}>
            <Image src="/imagens/sala2.jpg"
            width={350}
            height={400}/>

            <Image src="/imagens/sala3.jpg"
            width={350}
            height={400}/>

            <Image src="/imagens/sala4.jpg"
            width={350}
            height={400}/>
        </div>
        
        
         <div className={styles.link}>
        <Link className={styles.botao} href="/">Back</Link></div>

        
       </main>
    );
}