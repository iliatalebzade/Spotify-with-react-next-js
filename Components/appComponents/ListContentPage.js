import React from 'react'
import {useSelector} from 'react-redux'

import MediaPlayer from './MediaPlayer'

import styles from '../../styles/ComponentStyles/ListContentPage.module.css'
import ListItem from '../ListItem'

const ListContentPage = () => {

    const state = useSelector(state => state)

    return (
        <div className={styles.main}>
            <div className={styles.contentMain}>
                {state.Songsreducer.songs.map((item, index)=>{
                    return(
                        <ListItem
                            is_active={item.is_active}
                            songName={item.songName}
                            isLiked={item.is_liked}
                            artistName={item.artist} 
                            img={item.coverSrc}
                            key={index}
                            index={index}
                            wholeItem={item}
                        />
                    )
                })}
            </div>
            <MediaPlayer />
        </div>
    )
}

export default ListContentPage