import { useState } from "react"
//Random gift


const gifts = [
    'CPU i9',
    'Ram 18gb',
    'RGB keyboard'
]
function UseState2() {

    const [gift, setGift] = useState('')

    const handleGift = () => {
        setGift(gifts[Math.floor(Math.random()*gifts.length)])
    }

    return (
        <div style={{padding: 20}}>
            <h1>{gift || 'Chua co phan thuong'}</h1>
            <button onClick={handleGift}>Lay thuong</button>
        </div>
    )
}

export default UseState2