import styles from './Sidebar.module.css'
import Socials from '../socials/Socials'
import photo from '../../assets/foto_perfil.png'
import git_icon from '../../assets/github_icon_white.svg'
import linkedin_icon from '../../assets/linkedin_icon_white.svg'

export default function Sidebar() {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.profile}>
                    <img src={photo} alt="Foto de José Victor" />
                    <p>José Victor</p>
                </div>
                <div className={styles.socials}>
                    <Socials 
                        link="https://github.com/Zoldyako"
                        src={git_icon}
                        alt="José github account"
                    />
                    <Socials 
                        link=""
                        src={linkedin_icon}
                        alt="José linkedin account"
                    />
                </div>
                <div className={styles.skills}>
                    <h2>Skills:</h2>
                    <p>HTML/CSS/JavaScript</p>
                    <p>NodeJS/Vite</p>
                    <p>React</p>
                    <p>MySQL/MongoDB</p>
                </div>
            </div>
        </>
    )
}