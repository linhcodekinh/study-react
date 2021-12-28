import {useEffect, useState} from 'react'
//Update DOM
//Side Effect
//1. useEffect(callback)
//- Gọi callback mỗi khi component re-render
//- Gọi callback sau khi component thêm element vào DOM
//2. useEffect(callback, [])
//- Chỉ gọi callback 1 lần sau khi component mounted
//3. useEffect(callback, [deps])

//----------------
//1. Callback luôn được gọi sau khi component mounted
function UseEffect() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts => {
      setPosts(posts)
      console.log(posts)
    })
  }, [])

  useEffect(() => {
    console.log('Mounted');
    document.title = title
  })
 

  return (
    <div style={ { padding: 20}}>
        <input  
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
        {console.log('render')}
        <ul>
          {posts.map(post => (
            <li key={post.id}>
              {post.title}
            </li>
          ))
          }
         
        </ul>
    </div>
  );

}


export default UseEffect;