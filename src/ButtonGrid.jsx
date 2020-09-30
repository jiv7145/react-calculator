import React from 'react'
import "./ButtonGrid.css"

export default function ButtonGrid(props) {
    

    return <div className="ui grid" id="button-grid">
        <button onClick={props.numberClicked} className="four wide column c-btn" value="7">7</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="8">8</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="9">9</button>
        <button onClick={props.symbolClicked} className="four wide column" value="x">x</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="4">4</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="5">5</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="6">6</button>
        <button onClick={props.symbolClicked} className="four wide column" value="-">-</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="1">1</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="2">2</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="3">3</button>
        <button onClick={props.symbolClicked} className="four wide column" value="+">+</button>
        <button onClick={props.symbolClicked} className="four wide column" value="+/-">+/-</button>
        <button onClick={props.numberClicked} className="four wide column c-btn" value="0">0</button>
        <button onClick={props.symbolClicked} className="four wide column" value=".">.</button>
        <button onClick={props.symbolClicked} className="four wide column" value="/">/</button>
        <button onClick={props.symbolClicked} className="four wide column" value="clear">Clear</button>
        <button onClick={props.symbolClicked} className="four wide column" value=""></button>
        <button onClick={props.symbolClicked} className="four wide column" value=""></button>
        <button onClick={props.symbolClicked} className="four wide column" value="=">=</button>
    </div>
}
