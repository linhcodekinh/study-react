import {useEffect, useState} from 'react'

// - Timer: setInterval, setTimeout, clearInterval, clearTimeout

//useEffect(callback, [deps])
//- Callback se duoc goi lai moi khi deps thay doi
// su dung toan tu === de so sanh su khac nhau cua deps

//----------------
//1. Callback luôn được gọi sau khi component mounted
//2. Clean up function se duoc goi truoc khi component unmonted
//3. Clean up function luon duoc goi truoc khi callback duoc goi (tru lan mounted)

const lessons = [
  {
    id: 1,
    name: 'React la gi?'
  },
  {
    id: 2,
    name: 'SPA/MPA la gi?'
  },
  {
    id: 3, 
    name:'Arrow function la gi?'
  }
]


function UseEffect6() {
  const [lessonId, setLessonId] = useState(1)

  useEffect(() => {

    const handleComment = ({detail}) => {
      console.log(detail)
    }

    window.addEventListener(`lesson-${lessonId}`, handleComment) 

    return () => {
      window.removeEventListener(`lesson-${lessonId}`, handleComment)
    }
  }, [lessonId])

  return (
    <div style={ { padding: 20}}>
        <ul>
          {lessons.map((lesson) => (
              <li
                key={lesson.id}
                style={{
                  color: lessonId === lesson.id ?
                  'red' :
                  '#333'
                }}
                onClick={() => setLessonId(lesson.id)}
              >
              {lesson.name}
              </li>
          )
          )}
        </ul>
    </div>
  );

}


export default UseEffect6;