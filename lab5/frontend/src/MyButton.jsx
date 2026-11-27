import { useState } from 'react'

function MyButton() {
    const [clickCount, setClickCount] = useState(0)

    const handleClick = () => {
        setClickCount((currentCount) => currentCount + 1)
    }

    const handleSubtract = () => {
        setClickCount((currentCount) => currentCount - 1)
    }

  return (

    <div>
        <p>Click on the Button</p>
        <button onClick={handleClick}>Click Me</button>
        <button onClick={handleSubtract}>Subtract One</button>
        <h2>Button clicked: {clickCount}</h2>
    </div>
  )
}

export default MyButton