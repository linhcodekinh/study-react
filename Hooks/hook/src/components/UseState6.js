import { useState } from "react"
//TO-DO LIST

function UseState6() {
    const [job, setJob] = useState('')
    const [jobs, setJobs] = useState(() => (JSON.parse(localStorage.getItem('jobs')) ?? [] ))
    

    const handleAdd = () => {
        console.log("job: " + job);
        if(job != null && job !== ''){
            setJobs(prev => {
            const newJobs  = [...prev, job]
            
            //save to localStorage        
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs', jsonJobs)

            return newJobs
        })}
       setJob('')
    }

    return (
        <div style={{padding: 20}}>
            <input 
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            <ul>
                {
                    jobs.map((job,index) => (
                        <li key={index}>{job}</li>
                    ))
                }
            </ul>
           
        </div>
    )
}

export default UseState6