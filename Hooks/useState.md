### Cách dùng

```jsx
import { useState } from "react"

function Component() {
    const [state, useState] = useState(initState)

    .....
}

```


### Lưu ý 
- Component được re-render sau khi setState
- Initial state chỉ dùng cho lần đầu
- Set state với callback?
- Initial với callback?
- Set state là thay thế state bằng giá trị mới