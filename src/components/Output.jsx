import React from 'react'

function Output({prev,cur}) {
    return (
        <div className="output">
            <div className="previous-operand">{prev}</div>
            <div className="current-operand">{cur}</div>
        </div>
    )
}

export default Output