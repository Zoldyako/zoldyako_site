import styles from './Projects.module.css'

export default function Project({name, desc, img, link}) {
    return (
        <>
            <a href={link} target="_blank">
                <div className={styles.project_component}>
                    <div className={styles.about}>
                        <h2 className={styles.title}>{name}</h2>
                        <p className={styles.desc}>{desc}</p>
                    </div>
                    <img className={styles.preview} src={img} alt="Projects preview image" />
                </div>
            </a>
        </>
    )
}