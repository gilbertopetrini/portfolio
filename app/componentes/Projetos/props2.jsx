import Link from "next/link";
import Styles from "./Projetos.module.css";

export default function ProjetosProps2(props) {
    return(
    <div className={Styles.projeto}>
        <img src="selo.png" className={Styles.selo}></img>
        <h2>{props.titulo}</h2>
        <div className={Styles.projetoimg2}>
            <Link href={props.href}><img src={props.imagem} className={Styles.imghover}></img></Link>
        </div>

        <div className={Styles.projetodesc}>
            <p>{props.descricao}</p>
        </div>
    </div>
    )
}