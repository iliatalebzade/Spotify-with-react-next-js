const initialState = {
    songs: [
        {
            songName: "numb",
            artist: "linking park",
            src: "/songs/Numb.mp3",
            coverSrc: "/songs/songcovers/numb.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "metal",
        },
        {
            songName: "crawling",
            artist: "linking park",
            src: "/songs/Crawling.mp3",
            coverSrc: "/songs/songcovers/crawling.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "metal",
        },
        {
            songName: "in the end",
            artist: "linking park",
            src: "/songs/InTheEnd.mp3",
            coverSrc: "/songs/songcovers/intheend.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "metal",
        },
        {
            songName: "breaking the habit",
            artist: "linking park",
            src: "/songs/BreakingTheHabit.mp3",
            coverSrc: "/songs/songcovers/breakingthehabit.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "metal",
        },
        {
            songName: "lose yourself",
            artist: "eminem",
            src: "/songs/LoseYourself.mp3",
            coverSrc: "/songs/songcovers/loseyourself.jpeg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "rap",
        },
        {
            songName: "the way i am",
            artist: "eminem",
            src: "/songs/TheWayIAm.mp3",
            coverSrc: "/songs/songcovers/TheWayIAm.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "rap",
        },
        {
            songName: "lovely",
            artist: "billie eilish",
            src: "/songs/lovely.mp3",
            coverSrc: "/songs/songcovers/lovely.jpg",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "pop",
        },
        {
            songName: "bad guy",
            artist: "billie eilish",
            src: "/songs/badguy.mp3",
            coverSrc: "/songs/songcovers/badguy.png",
            rightSearch: false,
            is_liked: false,
            is_active: false,
            genre: "pop",
        },
    ],

    selectedSong: {
        songName: "Song",
        artist: "Artist",
        src: null,
        coverSrc: "/songs/songcovers/musiccover.png",
        rightSearch: false,
        is_active: false,
    } 
}

const Reducer = (state = initialState, action) => {
    switch(action.type){
        case 'INDEX_GIVER':
            return {
                ...state, 
                songs: state.songs.map((item, index) => (
                    {
                        ...item,
                        index: index
                    }
                ))
            }
        case 'LIKE_CHANGER':
            return{
                ...state,
                songs: state.songs.map((item, index)=>{
                    if(index === action.payload.index){
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: item.rightSearch,
                            is_liked: !item.is_liked,
                            is_active: item.is_active,
                            genre: item.genre,
                            index: item.index
                        }
                    }else{return item}
                })
            }
        case 'SONG_SELECTOR':
            return{
                ...state,
                selectedSong: {
                    songName: action.payload.wholeItem.songName,
                    artist: action.payload.wholeItem.artist,
                    src: action.payload.wholeItem.src,
                    coverSrc: action.payload.wholeItem.coverSrc,
                    rightSearch: action.payload.wholeItem.rightSearch,
                    is_liked: action.payload.wholeItem.is_liked,
                    is_active: action.payload.wholeItem.is_active,
                    genre: action.payload.wholeItem.genre,
                    index: action.payload.wholeItem.index,
                },
                songs: state.songs.map((item, index)=>{
                    if(item.songName === action.payload.wholeItem.songName){
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: item.rightSearch,
                            is_liked: item.is_liked,
                            is_active: true,
                            genre: item.genre,
                            index: item.index
                        }
                    }else{
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: item.is_liked,
                            is_liked: item.is_liked,
                            is_active: false,
                            genre: item.genre,
                            index: item.index
                        }
                    }
                })
            }
        case 'Right_item':
            return{
                ...state,
                songs: state.songs.map((item, index)=>{
                    if(item.songName.includes(action.payload)){
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: true,
                            is_liked: item.is_liked,
                            is_active: item.is_active,
                            genre: item.genre,
                            index: item.index
                        }
                    }else{
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: false,
                            is_liked: item.is_liked,
                            is_active: item.is_active,
                            genre: item.genre,
                            index: item.index
                        }
                    }
                })
            }
        case 'SKIP_SONG':
            return{
                ...state,
                selectedSong: {
                    songName: action.payload.songName,
                    artist: action.payload.artist,
                    src: action.payload.src,
                    coverSrc: action.payload.coverSrc,
                    rightSearch: action.payload.rightSearch,
                    is_liked: action.payload.is_liked,
                    is_active: action.payload.is_active,
                    genre: action.payload.genre,
                    index: action.payload.index
                },
                songs: state.songs.map((item, index)=>{
                    if(item.songName === action.payload.songName){
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: item.rightSearch,
                            is_liked: item.is_liked,
                            is_active: true,
                            genre: item.genre,
                            index: item.index
                        }
                    }else{
                        return item = {
                            songName: item.songName,
                            artist: item.artist,
                            src: item.src,
                            coverSrc: item.coverSrc,
                            rightSearch: item.is_liked,
                            is_liked: item.is_liked,
                            is_active: false,
                            genre: item.genre,
                            index: item.index
                        }
                    }
                })
            }            
        case 'PREV_SONG':
            return {
                ...state,
                selectedSong: {
                    songName: action.payload.songName,
                    artist: action.payload.artist,
                    src: action.payload.src,
                    coverSrc: action.payload.coverSrc,
                    rightSearch: action.payload.rightSearch,
                    is_liked: action.payload.is_liked,
                    is_active: action.payload.is_active,
                    genre: action.payload.genre,
                    index: action.payload.index
                }
            }
        default: return state
    }
}

export default Reducer;