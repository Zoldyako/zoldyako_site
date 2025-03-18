import styles from './Sidebar.module.css'
import photo from '../../assets/imgs/foto_perfil.png'
import git_icon from '../../assets/icons/github_icon_white.svg'
import linkedin_icon from '../../assets/icons/linkedin_icon_white.svg'

export default function Sidebar() {
    return (
        <>
            <div className={styles.sidebar}>
                <div className={styles.profile}>
                    <img src={photo} alt="Foto de José Victor" />
                    <p>José Victor</p>
                </div>
                <div className={styles.socials}>
                    <div className='linkedin'>
                        <a 
                            href={"https://www.linkedin.com/in/jose-victor-dias-rodrigues/"} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            
                            <img
                                src={linkedin_icon}
                                alt={"José Linkedin Account"}
                            />
                        </a>
                    </div>
                    <div className='github'>
                        <a 
                            href={"https://github.com/Zoldyako"} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            
                            <img
                                src={git_icon}
                                alt={"José Linkedin Account"}
                            />
                        </a>
                    </div>
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