import styles from './Sidebar.module.css'
import photo from '../../assets/foto_perfil.png'

export default function Sidebar() {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.profile}>
                    <img src={photo} alt="Foto de José Victor" />
                    <p>José Victor</p>
                </div>
                <div className={styles.socials}>
                    <a href="">Linkedin</a>
                    <a href="">Github</a>
                </div>
                <div className={styles.skills}>
                    <p>HTML/CSS/JavaScript</p>
                    <p>NodeJS/Vite</p>
                    <p>React</p>
                    <p>MySQL/MongoDB</p>
                </div>
            </div>
        </>
    )
}