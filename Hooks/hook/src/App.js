import {useState} from 'react'
import UseState from './components/UseState'
import UseState2 from './components/UseState2'
import UseState3 from './components/UseState3'
import UseState4 from './components/UseState4'
import UseState5 from './components/UseState5'
import UseState6 from './components/UseState6'
import Mounted from './components/Mounted'

//fake comment
function emitComment(id) {
  setInterval(() => {
    window.dispatchEvent(
      new CustomEvent(`lesson-${id}`, 
        {detail: `Noi dung lesson-${id}`}
      )
    )
  }, 2000)
}

emitComment(1)
emitComment(2)
emitComment(3)

function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App" style={ {padding: 20} }>
        <div>
          <button onClick={() => setShow(!show)}>Toggle</button>
          {show && <Mounted />}
        </div>
        <UseState />
        <UseState2 />
        <UseState3 />
        <UseState4 />
        <UseState5 />
        <UseState6 />
    </div>
  );
}

export default App;



