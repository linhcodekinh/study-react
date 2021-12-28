import {useEffect, useState} from 'react'

// - Timer: setInterval, setTimeout, clearInterval, clearTimeout

//useEffect(callback, [deps])
//- Callback se duoc goi lai moi khi deps thay doi
// su dung toan tu === de so sanh su khac nhau cua deps

//----------------
//1. Callback luôn được gọi sau khi component mounted
//2. Clean up function se duoc goi truoc khi component unmonted
//3. Clean up function luon duoc goi truoc khi callback duoc goi (tru lan mounted)

function UseEffect4() {
  const [countDown, setCountDown] = useState(180)

  console.log(countDown);
  useEffect(() => {
    const timerId = setInterval(() => {
        setCountDown(prev => prev - 1)
    }, 1000)

    return () => clearInterval(timerId)
  }, [])

  // useEffect(() => {
  //   setTimeout(() => {
  //       setCountDown(countDown - 1)
  //   }, 1000)
  // }, [countDown])

  return (
    <div style={ { padding: 20}}>
        <h1>{countDown}</h1>
    </div>
  );

}


export default UseEffect4;