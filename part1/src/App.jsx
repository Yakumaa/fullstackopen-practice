import {useState} from 'react'

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>

      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  // const name = 'Peter'
  // const age = 10

  // return (
  //   <div>
  //     <h1>Greetings</h1>
  //     <Hello name="Maya" age={26 + 10} />
  //     <Hello name={name} age={age} />
  //   </div>
  // )
  
  const [counter, setCounter] = useState(0)

  // const handleClick = () => {
  //   console.log('clicked')
  //   setCounter(counter + 1)
  // }

  console.log('rendering...', counter)

  return (
    <>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter+1)}>plus</button>
      <button onClick={() => setCounter(0)}>zero</button>
    </>
  )
}

export default App