import React from 'react'
import { Redirect } from 'react-router-dom'

export default function Booking(props) {

    if(localStorage.getItem('userLogin')) {
        return (
            <div>
                Đặt vé
            </div>
        )
    }
    return <Redirect to='/login'/>
}
