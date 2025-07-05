import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            size="medium"
            sx={{
                color: '#1976d2',
                width: '50%',

            }}
            {...props}
        />
    )
}

export default SuperRange
