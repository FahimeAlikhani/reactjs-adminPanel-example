import React from 'react'
import { useStyle } from '../assets/styles/app'

const Spinner = () => {
    const classes = useStyle()
    return (
        <div className={classes.spinner}>
            درحال بارگذاری ...
        </div>
    )
}

export default Spinner
