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

function UseState5() {
    const [checked, setChecked] = useState(1)
    // console.log(checked);
    
    const handleSubmit = () => {
       console.log(checked);
    }

    return (
        <div style={{padding: 20}}>
            {
                courses.map(course => (
                    <div key={course.id}>
                        <input 
                            type="radio"
                            checked={checked === course.id}
                            onChange={() => setChecked(course.id)}
                        />
                        {course.name}
                    </div>
                ))
            }
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UseState5