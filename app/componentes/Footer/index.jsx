import Styles from "./Footer.module.css";
import BtnE from "./btnEmail.js";
import BtnL from "./btnLinkedin.js";
import BtnW from "./btnZap.js";

//footer
export default function Footer() {
    return (
        <footer className={Styles.fundo}>
            <div className={Styles.footer}>
                <div className={Styles.footerAlign}>
                    <div className={Styles.titulos}>
                        <h2>Gostou do que viu?</h2>
                        <p>Entre em contato comigo!</p>
                    </div>

                    <div className={Styles.footerinfo}>
                        <div className={Styles.email}>
                            <h4 className={Styles.linkedin}>Contato direto</h4>
                            <div className={Styles.emailbtn}>
                                <p className={Styles.email}>WhatsApp</p><BtnW/>
                            </div>
                            <h4 className={Styles.linkedin}>Linkedin</h4>
                            <div className={Styles.emailbtn}>
                                <p className={Styles.email}>@petrinidias</p><BtnL/>
                            </div>

                            <h4 className={Styles.linkedin}>Email</h4>
                            <div className={Styles.emailbtn}>
                                <p className={Styles.email}>petrini4u@gmail.com</p><BtnE/>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

