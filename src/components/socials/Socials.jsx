import styles from './Socials.module.css'

export default function Socials({link, src, alt}) {
    return (
        <div className={styles.button}>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img 
                    src={src} 
                    alt={alt}
                />
            </a>
        </div>
    )
}