import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'

export default function Auth(props) {

    useEffect(() => {

    })

    const handleClick = () => {

    }

    return (
        <>
            <Navbar user={props.name} />
            <button onClick={handleClick}>check</button>
            <div>Auth</div>
        </>
    )
}
