import React,{ useState, useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export default function home() {
    let location = useLocation() // location.pathname

    let options = [{name: 'Websites', width: 90}, {name: 'Bots', width: 85}, {name: 'Apis', width: 80}, {name: 'Servers', width: 75}, {name: 'Apps', width: 70}, {name: 'Contact', width: 65}]

    return (
        <div className='options'>
            {options.map((option, index) => {
                return (
                    <div className="option" style={{width: option.width + '%'}} onMouseEnter={()=>{
                        let options = document.getElementsByClassName('option')[index]
                        options.style.width = option.width + 5 + '%'
                    }}
                    
                    onMouseLeave={()=>{
                        let options = document.getElementsByClassName('option')[index]
                        options.style.width = option.width + '%'
                    }}

                    onClick={()=>{
                        window.location.href = '#/services/' + option.name.toLowerCase()
                    }}
                    >
                {option.name}
            </div>
                )
            })}
        </div>
    )
}