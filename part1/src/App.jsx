import {useState} from 'react'

const History = (props) => {
  if (props.allClicks.length === 0) {
    return (
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }
  return (
    <div>
      button press history: {props.allClicks.join(' ')}
    </div>
  )
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

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

  const hello = (who) => () => {
    console.log('hello', who)
  }

  const [value, setValue] = useState(10)

  const setToValue = (newValue) => () => {
    console.log('value now', newValue)
    setValue(newValue)
  }

  return (
    <div>
      {clicks.left}
      <Button handleClick={handleLeftClick} text='left'></Button>
      <Button handleClick={handleRightClick} text='right'></Button>
      {clicks.right}
      <History allClicks={allClicks} />
      <p>total {total}</p>

      <button onClick={hello('world')}>button</button>
      
      <Button handleClick={setToValue(1000)} text='thousand'/>
      <Button handleClick={setToValue(0)} text='reset'/>
      <Button handleClick={setToValue(value + 1)} text='increment'/>
    </div>
  )
}

export default App