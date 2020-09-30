import React from 'react'


export default function Display(props) {
    const additionalStyle = {
        width: "100%",
        textAlign: "right",
        margin: "10px"
    }
    
    return <div className="ui label massive" style={additionalStyle}>{props.content}</div>
}
