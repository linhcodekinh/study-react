
```jsx
//https://fullstack.edu.vn/blog/phan-1-tao-du-an-reactjs-voi-webpack-va-babel.html
//Hooks được thêm vào React từ phiên bản 16.8.0
import { func } from 'prop-types'
import React, {
    useState,
    useEffect,
    useLayoutEffect,
    useRef,
    useCallBack,
    useMemo,
    useReducer,
    useContext,
    useImperativeHandle,
    useDebugValue
} from 'react' 

//Chưa dùng hooks, chỉ là UI component
function ComponentA() {
    return <h1>Haven't used hooks yet</h1>
}

//Sử dụng hooks, hỗ trợ thêm nhiều tính năng
function ComponentB(){
    //useState
    const [state, setState] = useState(initState)

    //useEffect
    useEffect(() => {

    }, [deps])

    //useLayoutEffect
    useLayoutEffect(() => {

    }, [deps])

    //useRef
    const ref = userRef()

    //useCallBack
    const fn = useCallBack(() => {

    }, [deps])

    //useMemo
    const result = useMemo(() => {
        //return results for memo
    }, [deps])

    //useReducer
    const [state, dispatch] = useReducer(reducer, initialArg, init)

    //useContext
    const value = useContext(MyContext)
    
    //useImperativeHandle
    useImperativeHandle(ref, createHandle, [deps])

    //useDebugValue
    useDebugValue(isOnline ? 'Online' : 'Offline')

    return (
        <h1>Hooks</h1>
    )
}


// 1. Chỉ dùng function component
// 2. Component đơn giản và dễ hiểu hơn
//     - Không bị chia logic ra như methods trong lifecycle của Class Component
//     - Không cần sử dụng "this"
// 3. Sử dụng Hooks khi nào?
//     - Dự án mới => Hooks
//     - Dự án cũ 
//         . Component mới => Function component + Hooks
//         . Component cũ => Giữ nguyên, có thời gian tối ưu sau
//     - Logic nghiệp vụ cần sử dụng các tính chất của OOP => Class component
// 4. Người mới nên bắt đầu với Function Component
// 5. Kết hợp được cả 2 Class và Function component


//Function Component
function Item({ children }) {
    return <li>{children}</li>
}

//Class Component
class List extends React.Component {
    render() {
        return (
            <ul> 
                <Item>1</Item>
                <Item>2</Item>
                <Item>3</Item>
            </ul>
        )
    }
}
```