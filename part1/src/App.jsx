import {useState} from 'react'

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })
  const [allClicks, setAllClicks] = useState([])
  const [total, setTotal] = useState(0)

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat('L'))
    setClicks({ ...clicks, left: clicks.left + 1 })
    setTotal(clicks.left + clicks.right + 1)
  }
  const handleRightClick = () => {
    setAllClicks(allClicks.concat('R'))
    setClicks({ ...clicks, right: clicks.right + 1 })
    setTotal(clicks.left + clicks.right + 1)
  }
  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
      <p>{allClicks.join(' ')}</p>
      <p>total {total}</p>
    </div>
  )
}

export default App