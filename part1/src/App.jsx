import {useState} from 'react'

const App = () => {
  const [counter, setCounter] = useState(0)

  const Display = (props) => {
    return (
      <div>{props.counter}</div>
    )
  }
  
  const Button = (props) => {
    return (
      <button onClick={props.onClick}>
        {props.text}
      </button>
    )
  }

  console.log('rendering...', counter)

  return (
    <>
      <Display counter={counter} />
      <Button onClick={() => setCounter(counter+1)} text='plus' />
      <Button onClick={() => setCounter(0)} text='zero' />
      <Button onClick={() => setCounter(counter-1)} text='minus' />
    </>
  )
}

export default App