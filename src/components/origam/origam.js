import React from 'react'
import styles from './origam.module.css'
import image from '../../images/blue-origami-bird.png'

const Origam = ({ description, author }) => {
    return (
        <div className={styles.origam}>
            <img className={styles.origamLogo} src={image} alt="" />
            <p className={styles.description}>
                {description}
            </p>
            <div className={styles['origam-div']}>
                <span className={styles.author}>
                    <small>Author: </small>
                    {author.username}
                </span>
            </div>
        </div>
    )
}

export default Origam
