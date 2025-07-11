'use client';

import Link from "next/link";
import Styles from "./Footer.module.css";
import { MdOpenInNew } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";


const OpenWhatsappButton = () => {
    return (
      <Link className={Styles.btnL} href="https://wa.me/5521999475386" target="_blank">
        <FaWhatsapp /> Abrir
      </Link>
    );
  };
  
  export default OpenWhatsappButton;