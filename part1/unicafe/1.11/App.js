import React, {useState} from 'react';


const Statistic = (props) => {
    return (
        <p>{props.text} {props.value}</p>
    )
}

const Statistics = (props) => {
    const all = props.counter1 + props.counter3 + props.counter2
    const average = (props.counter1 + (props.counter3*-1))/all
    const positive = (props.counter1)/all *100
    if(all === 0){
      return(
        <p>No feedback given</p>
      )
    }
    
    return (
        <div>
          <table>
            <tr><Statistic text="good" value={props.counter1} /></tr>
            <tr><Statistic text="neutral" value={props.counter2} /></tr>
            <tr><Statistic text="bad" value={props.counter3} /></tr>
            <tr><Statistic text="all" value={all} /></tr>
            <tr><Statistic text="average" value={average} /></tr>
            <tr><Statistic text="positive" value={positive} /></tr>
          </table> 
        </div>
    )
}

const Button = (props) => {
    return (
        <button onClick={props.event}>{props.text}</button>
    )
}
const App = () => {
  const [ counter1 , setCounter ] = useState(0)
  const [ counter2 , setCounter1 ] = useState(0)
  const [ counter3 , setCounter2 ] = useState(0)
    
    return (
        <div>
            <h1> give feedback </h1>
            <div>
                <Button event={()=> setCounter(counter1+1)} text="Good" />
                <Button event={()=> setCounter1(counter2+1)} text="Neutral" />
                <Button event={()=> setCounter2(counter3+1)} text="Bad" />
                                
            </div>
            <h2>statistics</h2>
            <Statistics counter1={counter1}  counter3={counter3} counter2={counter2} />
        </div>
    )
}



export default App