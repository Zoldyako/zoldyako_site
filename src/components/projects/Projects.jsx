import styles from './Projects.module.css'

export default function Project({name, desc, img}) {
    return (
        <>
            <div className={styles.project_component}>
                <h2>{name}</h2>
                <div className={styles.desc}>
                    <p>{desc}</p>
                    <img src={img} alt="Projects preview image" />
                </div>
            </div>
        </>
    )
}