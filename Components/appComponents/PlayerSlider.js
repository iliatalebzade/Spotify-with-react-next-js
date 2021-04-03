import React from 'react'
import { useSelector } from 'react-redux'

import { Slider } from 'antd';

const PlayerSlider = ({ seekbarVal, seekbarChanger }) => {

    const state = useSelector(state => state)

    return (
        <div>
            <Slider
                min={0}
                max={100}
                tipFormatter={null}
                value={seekbarVal}
                onChange={seekbarChanger}
            />
        </div>
    )
}

export default PlayerSlider