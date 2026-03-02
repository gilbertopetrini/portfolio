import Styles from "./Projetos.module.css";
import { FaArrowDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import Link from "next/link";
import ProjetosProps from "./props.jsx";
import ProjetosProps2 from "./props2";


export default function Projetos() {
    return (
      <div id="projetos">
           <div className={Styles.confirameusprojetos}>
                <div className={Styles.projetostitle}>
                    <h1>Confira meus projetos  <FaArrowDown className={Styles.downarrow}/></h1>
                </div>
                <div className={Styles.projetosmain}>

                    <div className={Styles.projetos}> 

                        <ProjetosProps2 className={Styles.teste}
                        href="https://www.instagram.com/organizafinanc/"
                        imagem="./verdinha.png"
                        titulo="Sua amiga financeira verdinha"
                        descricao={<span>Minha planilha de controle financeiro alcançou o <strong>top 100</strong> nacional de produtos mais vendidos por <strong>duas semanas</strong> seguidas na <a className={Styles.cakto} href="https://www.cakto.com.br/" target="_blank">plataforma Cakto</a>. O material já atingiu a marca de <strong>+6.500 compradores satisfeitos</strong>.</span>}
                        />

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