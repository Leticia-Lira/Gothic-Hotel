import styles from '@/app/novapagina1/banheiro.module.css';
import Link from "next/link";
import Image from 'next/image';

export default function NewPage(){
    return(
       <main className={styles.main}>
        <div className={styles.imagens}>
            <Image src="/imagens/banheiro.jpg"
            width={400}
            height={400}/>
        </div>
         
         <div className={styles.link_voltar}>
        <Link href="/">Back</Link></div>
       </main>
    );
}