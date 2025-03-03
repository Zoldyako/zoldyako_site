import styles from './Projects.module.css'

export default function Project({name, desc, img, link}) {
    return (
        <>
            <div className={styles.project_component}>
                <h2>{name}</h2>
                <div className={styles.desc}>
                    <div>
                        <p>{desc}</p>
                        <p><a href={link} target="_blank">Link to this project</a></p>
                    </div>
                    <img src={img} alt="Projects preview image" />
                </div>
            </div>
        </>
    )
}