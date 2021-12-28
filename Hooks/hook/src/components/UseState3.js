import { useState } from "react"
//two-way binding

function UseState3() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
  
    const handleSubmit = () => {
        //call api
        console.log(name, email)
    }

    return (
        <div style={{padding: 20}}>
            <input 
                value={name}
                onChange={e => setName(e.target.value)}
            />
            <input 
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UseState3