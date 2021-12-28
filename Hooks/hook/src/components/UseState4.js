import { useState } from "react"
//two-way binding

const courses = [
    {
        id: 1,
        name: 'html/css'
    },
    {
        id: 2,
        name: 'js'
    },
    {
        id: 3,
        name: 'react'
    }
]

function UseState4() {
    const [checked, setChecked] = useState([])

    const handleCheck = (id) => {
        if(checked.includes(id)){
            setChecked(checked.filter(item => item !== id))
        }else{
            setChecked(prev => [...prev, id])
        }
    }

    const handleSubmit = () => {
       console.log(checked);
    }

    return (
        <div style={{padding: 20}}>
            {
                courses.map(course => (
                    <div key={course.id}>
                        <input 
                            type="checkbox"
                            checked={checked.includes(course.id)}
                            onChange={() => handleCheck(course.id)}
                        />
                        {course.name}
                    </div>
                ))
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UseState4