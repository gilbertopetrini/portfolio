import HeaderP from "../componentes/HeaderP";
import Projeto from "../componentes/Projeto";
import Footer from "../componentes/Footer";
import styles from "./page.module.css"

export default function Taskpay() {
    return (
      <div className={styles.background}>
        <HeaderP/>
        <Projeto
        titulo="Dr. Júnior Almeida"
        status="Concluído!"
        imagem="./jradv.png"
        
        hrefSite="https://drjunioradvogado.vercel.app/"
        hrefRep=""
        
        />
        <Footer/>
      </div>
    );
  }