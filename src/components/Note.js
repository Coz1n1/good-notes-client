import React from 'react'

export default function Note(props) {
    return (
        <>
            <div>
                title: {props.title}
                text: {props.text}
                date: {props.date}
            </div>
        </>
    )
}
