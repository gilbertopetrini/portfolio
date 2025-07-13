import Styles from "./Projetos.module.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Link from "next/link";
import ProjetosProps from "./props.jsx";


export default function Projetos() {
    return (
      <div id="projetos">
           <div className={Styles.confirameusprojetos}>
                <div className={Styles.projetostitle}>
                    <h1>Confira meus projetos  <FaArrowDown className={Styles.downarrow}/></h1>
                </div>
                <div className={Styles.projetosmain}>

                    <div className={Styles.projetos}> 

                        <ProjetosProps
                        href="/jradv"
                        imagem="./jradv2.png"
                        titulo="Dr. Júnior Almeida"
                        descricao={<span><strong>Aplicação web</strong> para auxiliar a comunicação entre advogado e clientes via <strong>manipulação de mensagens</strong> pelo whatsapp.</span>}
                        />

                        <ProjetosProps
                        href="/medeiros"
                        imagem="./medeiros.png"
                        titulo="Medeiros Odontologia"
                        descricao={<span><strong>Aplicação web</strong> para auxiliar a comunicação entre dentistas e clientes via <strong>manipulação de mensagens</strong> pelo whatsapp.</span>}
                        />
                        <ProjetosProps
                        href="/portfolio"
                        imagem="./portfolioimg.jpg"
                        titulo="Meu portfólio!"
                        descricao={<span>Listei alguns pontos <strong>muito interessantes</strong> do meu portfólio. Vale a pena dar uma olhada! 😉</span>}
                        />
                        
                    </div>
                </div>
            </div>
            
      </div>
    );
};