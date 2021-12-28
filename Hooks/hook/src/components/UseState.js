import {useState} from 'react'
const orders = [100, 200, 300]

function UseState() {
// const [counter, setCounter] = useState( () => 
  //    orders.reduce ((total, cur) => total + cur, 0)
  // )

  // const handleIncrease = () => {
  //   // setCounter(counter + 1)
  //   // setCounter(counter + 1)
  //   // setCounter(counter + 1)
  //   setCounter(prev => prev + 3)
  // }

  // return (
  //   <div className="App" style={ { padding: 20}}>
  //       <h1>{counter}</h1>  
  //       <button onClick={handleIncrease}>Increase</button>
  //   </div>
  // );

  const [info, setInfo] = useState({
    name: 'Nguyen Van A',
    age: 18,
    address: 'Ha Noi, VN'
})

const handleUpdate = () => {
  // setInfo({
  //   ...info,
  //   bio: "Yeu mau hong"
  // })

  // setInfo(prev => ({
  //   ...prev,
  //   bio: "Yeu mau hong"
  // }))

  setInfo(prev => {
    //logic....

    return {
      ...prev,
      bio: "Yeu mau hong"
    }
  })
}


return (
    <div className="App" style={ { padding: 20}}>
        <h1>{JSON.stringify(info)}</h1>  
        <button onClick={handleUpdate}>Update</button>
    </div>
  );

}


export default UseState;