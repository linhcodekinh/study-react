import {useEffect, useState} from 'react'

// - Timer: setInterval, setTimeout, clearInterval, clearTimeout

//useEffect(callback, [deps])
//- Callback se duoc goi lai moi khi deps thay doi
// su dung toan tu === de so sanh su khac nhau cua deps

//----------------
//1. Callback luôn được gọi sau khi component mounted
//2. Clean up function se duoc goi truoc khi component unmonted
//3. Clean up function luon duoc goi truoc khi callback duoc goi (tru lan mounted)

function UseEffect5() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)
    }
  }, [avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    file.preview = URL.createObjectURL(file)

    setAvatar(file)
    e.target.value = null
  }



  return (
    <div style={ { padding: 20}}>
        <input 
          type="file" 
          onChange={handlePreviewAvatar}
        />
        {avatar && (
          <img src={avatar.preview} alt="" width="80%"/>
        )}
    </div>
  );

}


export default UseEffect5;