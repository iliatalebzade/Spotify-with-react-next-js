import React from 'react'
import { useDispatch } from 'react-redux'
import { likeChanger, songSelector } from '../../Redux/Songs/action'

import styles from '../../styles/ComponentStyles/Card.module.css'

const Card = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={props.is_active ? styles.CardmainActive : styles.Cardmain}>
            <div onClick={()=> dispatch(songSelector(props.wholeItem, props.index))} className={styles.innerContentDiv}>
                <img className={styles.cover} src={props.img}/>
                <p>{props.songName}</p>
                <span>{props.artistName}</span>
            </div>
            
            <div onClick={()=> dispatch(likeChanger(props.index))} className={styles.heart}>
                {!props.isLiked &&
                    <img src="../betterHeart.png" alt=""/>
                }

                {props.isLiked &&
                    <img src="../filledheart.png" alt=""/>
                }
            </div>
        </div>
    )
}

export default Card
