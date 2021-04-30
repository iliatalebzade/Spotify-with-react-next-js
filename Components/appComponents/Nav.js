import React, { useEffect } from 'react'
import Link from 'next/link'

import styles from '../../styles/ComponentStyles/nav.module.css'
import ActiveMusicCover from './ActiveMusicCover'

import {useSelector, useDispatch} from 'react-redux'

import { indexGiver } from '../../Redux/Songs/action'
import OpenSettingsBtn from './OpenSettingsBtn'

const Nav = () => {

    const state = useSelector(state => state)
    const dispatch = useDispatch()

    //Runs only once at the launch of application to give song items they're own index value
    //I've added this method here since it's one of the only components that are used on every route and situation
    useEffect( () => {
        dispatch(indexGiver());
    }, [])

    return (
        <div className={styles.navMain}>
            <OpenSettingsBtn />

            <ul>
                <li>
                    <Link href="/app/home">
                        <a>
                            <img src="../home.png" alt=""/>
                            <span>Home</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/app/list">
                        <a>
                            <img src="../list.png" alt=""/>
                            <span>List</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/app/liked">
                        <a>
                            <img src="../like.png" alt=""/>
                            <span>Liked</span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="/app/search">
                        <a>
                            <img src="../search.png" alt=""/>
                            <span>Search</span>
                        </a>
                    </Link>
                </li>
            </ul>

            <ActiveMusicCover />
        </div>
    )
}

export default Nav
