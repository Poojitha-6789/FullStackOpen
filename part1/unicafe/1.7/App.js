import React, { useState } from 'react'

const Display = (props) => {
    return (
      <div>{props.counter1}</div>
    )
  }

  const Display1 = (props) => {
    return (
      <div>{props.counter2}</div>
    )
  }

  const Display2 = (props) => {
    return (
      <div>{props.counter3}</div>
    )
  }
  const Button = (props) => {
    return (
      <button onClick={props.handleClick}>
        {props.text}
      </button>
    )
  }


const App = () => {
  const [ counter1 , setCounter ] = useState(0)
  const [ counter2 , setCounter1 ] = useState(0)
  const [ counter3 , setCounter2 ] = useState(0)

  const increaseByOne = () => setCounter(counter1 + 1)
  const decreaseByOne = () => setCounter1(counter2 + 1)
  const setToZero = () => setCounter2(counter3 + 1)

  return (
    <div>
        <h1>give feedback</h1>
      <Button
        handleClick={increaseByOne}
        text='good'
      />
      <Button
        handleClick={setToZero}
        text='neutral'
      />     
      <Button
        handleClick={decreaseByOne}
        text='bad'
      />       
      <h1>statistics</h1>   
      <p>good <Display counter1={counter1}/></p>
      <p>neutral <Display2 counter3={counter3}/> </p>
      <p>bad <Display1 counter2={counter2}/></p>
      <p>all {counter1+counter2+counter3}</p>
      <p>average {(counter1+(counter3*-1))/counter1+counter2+counter3}</p>
      <p>postive percentage{(counter1/counter1+counter2+counter3)*100}% </p>
    </div>
  )
}
export default App