import React from 'react';
import styles from "./page.module.css";
import Link from "next/link";
import Image from 'next/image';
import Topo from "@/app/componentes/Topo/index.jsx";
import Foot from "@/app/componentes/Rodapé/rodape.jsx";

export default function Home(){
  return(

    
    <main className={styles.main}>
    <Topo/>


      <div className={styles.container_imagens}>
        <Link href="/novapagina">
        <div className={styles.imagem}>
        <Image src="/imagens/sala.jpg"
        width={250}
        height={250}/>
      </div>
      </Link>
       
      <Link href="/novapagina1">
       <div className={styles.imagem}>
       <Image src="/imagens/banheiro.jpg"
       width={250}
       height={250}/>
       </div>
       </Link>

      
       <div className={styles.imagem}>
       <Image src="/imagens/quarto.jpg"
       width={250}
       height={250}/></div>
       

       <div className={styles.imagem}>
       <Image src="/imagens/cozinha.jpg"
       width={250}
       height={250}/></div>
      </div>

      <Foot/>
    </main>
  )
}