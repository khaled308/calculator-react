import React from 'react'

function Button({content,handelClick}) {
    let style = ''
    if(content === '=' || content === 'AC') style = 'span-two'
    return (
        <button className={style} onClick={handelClick}>{content}</button>
    )
}

export default Button