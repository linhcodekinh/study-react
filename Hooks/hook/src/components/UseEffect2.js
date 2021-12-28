import {useEffect, useState} from 'react'

//3. useEffect(callback, [deps])
//- Callback se duoc goi lai moi khi deps thay doi
// su dung toan tu === de so sanh su khac nhau cua deps

//----------------
//1. Callback luôn được gọi sau khi component mounted
const tabs = ['posts', 'comments', 'albums']
function UseEffect2() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')

  useEffect(() => {
    console.log('Mounted 1');
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then(posts => {
      setPosts(posts)
    })
  }, [type])

  useEffect(() => {
    console.log('Mounted 2');
    document.title = title
  })

  return (
    <div style={ { padding: 20}}>
        {tabs.map(tab => (
          <button 
            key={tab}
            style={ type === tab ? {
                color: 'fff',
                backgroundColor: '#333' 
            } : {}}
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}
         <input  
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {console.log('render')}
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.title || post.name}
            </li>
          ))
          }
         
        </ul>
    </div>
  );

}


export default UseEffect2;