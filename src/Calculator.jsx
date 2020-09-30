import React, {useState} from 'react'
import Display from "./Display.jsx"
import ButtonGrid from "./ButtonGrid.jsx"
import "./Calculator.css"

export default function Calculator() {
    const [storedSymbol, setStoredSymbol] = useState("")
    const [storedNumber, setStoredNumber] = useState(0)
    let result
    const [display, setDisplay] = useState("0")
    const [flag, setFlag] = useState(false)
    const [equalsClicked, setEqualsClicked] = useState(false)

    function numberClicked(e) {
        const clickedNumber = String(e.target.value)
        if (display === "0" || flag) {
            setDisplay(clickedNumber)
            setFlag(false)
        } else if (equalsClicked) {
            setDisplay(clickedNumber)
            setFlag(false)
            setStoredNumber(0)
            setEqualsClicked(false)
        } else {
            setDisplay(display + clickedNumber)
        }
    }

    function performEqualsOperation() {
        if (storedSymbol === "+") {
            result = Number(display) + storedNumber
        } else if (storedSymbol === "-") {
            result = storedNumber - Number(display)
        } else if (storedSymbol === "x") {
            result = storedNumber * Number(display)
        } else if (storedSymbol === "/") {
            result = storedNumber / Number(display)
        } else {
            console.log("no symbol")
        }
        setDisplay(result)
        setStoredNumber(result)
        setFlag(false)
        setEqualsClicked(true)
    }

    function symbolClicked(e) {
        switch (e.target.value) {
            case "=":
                performEqualsOperation()
                break
            case "+":
                setStoredSymbol("+")
                setStoredNumber(Number(display))
                setFlag(true)
                break
            case "-":
                setStoredSymbol("-")
                setStoredNumber(Number(display))
                setFlag(true)
                break
            case "x":
                setStoredSymbol("x")
                setStoredNumber(Number(display))
                setFlag(true)
                break
            case "/":
                setStoredSymbol("/")
                setStoredNumber(Number(display))
                setFlag(true)
                break
            case ".":
                if (!display.includes(".")) {
                    setDisplay(display + ".")
                }
                break
            case "+/-":
                if (display.includes("-")) {
                    setDisplay(display.substring(1))
                } else {
                    setDisplay("-" + display)
                }
                break
            case "clear":
                setDisplay("0")
                setStoredNumber(0)
                setFlag(false)
                break
            default:

        }
        
    }

    return <div id="calculator">
        <Display content={display} />
        <ButtonGrid numberClicked={numberClicked} symbolClicked={symbolClicked} />
    </div>
}