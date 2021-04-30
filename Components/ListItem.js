import React from 'react'
import { useDispatch } from 'react-redux'
import { likeChanger, songSelector } from '../Redux/Songs/action'

import styles from '../styles/ComponentStyles/ListItem.module.css'

const ListItem = (props) => {

    const dispatch = useDispatch()

    return (
        <div className={props.is_active ? styles.ListItemActivemain : styles.ListItemMain}>
            <div onClick={()=> dispatch(songSelector(props.wholeItem, props.index))} >
                <ul>
                    <li><span>Name: </span>{props.songName}</li>
                    <li><span>Artist: </span>{props.artistName}</li>
                </ul>
            </div>
            <div onClick={()=> dispatch(likeChanger(props.index))} className={styles.heart}>
                        {!props.isLiked &&
                            <img src="../heart.png" alt=""/>
                        }

                        {props.isLiked &&
                            <img src="../filledheart.png" alt=""/>
                        }
            </div>
        </div>
    )
}

export default ListItem
