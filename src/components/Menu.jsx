import React from 'react'
import { useParams } from 'react-router-dom'
import styles from '../assets/styles/Menu.module.css'
import useSize from '../libs/useSize';



export default function Menu() {

    const params = useParams();
    const windowSize = useSize();

    console.log(params.name);
    let imageSource = '/media/' + params.name + '.png';

    if (windowSize) {
        return (
            <div className={styles.overlay}>
                <img src={imageSource} className={styles.backgroundImage} alt="" />
            </div>
        )
    }
}



