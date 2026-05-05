import styles from '../styles/main.js';
import {motion} from 'framer-motion';
import {user} from 'lucide-react';

export default function botao({nome, foto, selecionado, onclick}){
    return (
        <motion.button
        style = {selecionado ?  styles.botaoSelecionado : styles.botao}
        onclick={onclick}
        
    );
}