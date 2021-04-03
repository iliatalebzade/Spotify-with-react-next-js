import React from 'react'

import { Slider } from 'antd';

const SoundSlider = ({ seekBarValue, soundValueUpdater }) => {

    function formatter(value) {
        if(value != 0){
            return `${value}0%`
        }else return `${value}%`
    }

    return (
        <div>
            <Slider
                max={10}
                tipFormatter={formatter}
                value={seekBarValue}
                onChange={soundValueUpdater}
            />
        </div>
    )
}

export default SoundSlider