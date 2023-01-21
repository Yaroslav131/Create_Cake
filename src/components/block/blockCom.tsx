import React, { Component } from 'react'
import '../../reset.css'
import './blockStyle.css'

export default function Block(props: any) {
    return (
        <div className='section-div'>
            <p>{props.text}</p>
            <div className='section-div'>
                {props.body}
            </div>
        </div>
    )
}

