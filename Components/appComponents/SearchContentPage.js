import React, { useState } from 'react'

import MediaPlayer from './MediaPlayer'
import Card from './Card'

import styles from '../../styles/ComponentStyles/SearchContentPage.module.css'

import {useSelector, useDispatch} from 'react-redux'
import { songFinder } from '../../Redux/Songs/action'

const SearchContentPage = () => {

    const dispatch = useDispatch()

    const state = useSelector(state => state)

    const [search, setSearch] = useState({search: ''})

    const searchChangeHandler = (e) => {
        setSearch({
            ...search,
            search: e.target.value,
        })
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(search.search !== ''){
            dispatch(songFinder(search.search))
        }
    }

    return (
        <div className={styles.SearchContentPageMain}>
            <div className={styles.contentMain}>
                <h1>Search song</h1>
                <form onSubmit={submitHandler}>
                    <input name="searchItem" onChange={searchChangeHandler} value={search.search} type="text" placeholder="Song Name"/>
                </form>
                <div className={styles.resultsDiv}>
                    {state.Songsreducer.songs.map((item, index)=>{
                      if(item.rightSearch === true){
                        return(
                            <>
                                <Card 
                                    is_active={item.is_active}
                                    songName={item.songName}
                                    isLiked={item.is_liked}
                                    artistName={item.artist} 
                                    img={item.coverSrc}
                                    key={index}
                                    index={index}
                                    wholeItem={item}
                                />
                            </>
                        )
                      }  
                    })
                    }
                </div>
            </div>
            <MediaPlayer />
        </div>
    )
}

export default SearchContentPage
