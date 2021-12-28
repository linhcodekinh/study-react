import {useEffect, useState} from 'react'

// 3. Listen DOM events
//     - Scroll
//     - Resize

//useEffect(callback, [deps])
//- Callback se duoc goi lai moi khi deps thay doi
// su dung toan tu === de so sanh su khac nhau cua deps

//----------------
//1. Callback luôn được gọi sau khi component mounted
//2. Clean up function se duoc goi truoc khi component unmonted
const tabs = ['posts', 'comments', 'albums']
function UseEffect3() {
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)

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

  useEffect(() => {
    const handleScroll = () => {
        setShowGoToTop(window.scrollY >= 200) 
    }

    window.addEventListener('scroll', handleScroll)

    //clean up function
    return () => {
      console.log('unmounting..');
      window.removeEventListener('scroll', handleScroll)
    }
    // window.onscroll = (() => {
    //   setShowGoToTop(window.scrollY >= 200) 
    // })
  }, [])

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
        {showGoToTop && (
          <button
            style={{
              position: 'fixed',
              right: 20,
              bottom: 20
            }}
          >
            Go to top
          </button>
        )}
    </div>
  );

}


export default UseEffect3;