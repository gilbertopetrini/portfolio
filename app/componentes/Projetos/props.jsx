import Link from "next/link";
import Styles from "./Projetos.module.css";

export default function ProjetosProps(props) {
    return(
    <div className={Styles.projeto}>
        <h2>{props.titulo}</h2>
        <div className={Styles.projetoimg}>
            <Link href={props.href}><img src={props.imagem} className={Styles.imghover}></img></Link>
        </div>

        <div className={Styles.projetodesc}>
            <p>{props.descricao}</p>
        </div>
    </div>
    )
}