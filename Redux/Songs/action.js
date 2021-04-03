const LIKE_CHANGER = 'LIKE_CHANGER'
const SONG_SELECTOR = 'SONG_SELECTOR'
const Right_item = 'Right_item'
const INDEX_GIVER = 'INDEX_GIVER'
const SKIP_SONG = 'SKIP_SONG'

const indexGiver = () => ({type: INDEX_GIVER})

const likeChanger = (index) => ({type: LIKE_CHANGER, payload:{index: index}})
const songSelector = (wholeItem) => ({type: SONG_SELECTOR, payload: {wholeItem}})
const songFinder = (input) => ({type: Right_item, payload: input})

const skip = (item) => ({type: SKIP_SONG, payload: item})

export {
    likeChanger,
    songSelector,
    skip,
    songFinder,
    indexGiver
}