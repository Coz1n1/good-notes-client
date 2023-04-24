import React from 'react'
import Navbar from './Navbar'
import { useEffect } from 'react'

export default function Auth(props) {

    useEffect(() => {

    })

    return (
        <>
            <Navbar user={props.name} />
            <div></div>
        </>
    )
}
