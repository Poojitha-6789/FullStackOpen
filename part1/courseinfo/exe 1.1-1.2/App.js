import './App.css';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    lebel: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course.name} />
      <Content lebel={course.lebel}/>
      <Total lebel={course.lebel} />
    </div>
  )
}

const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <p>
      {props.part} {props.exercise}
    </p>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.lebel[0].name} exercise={props.lebel[0].exercise}/>
      <Part part={props.lebel[1].name} exercise={props.lebel[1].exercise}/>
      <Part part={props.lebel[2].name} exercise={props.lebel[2].exercise}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <p>Number of exercises {props.lebel[0].exercise + props.lebel[1].exercise + props.lebel[2].exercise}</p>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

export default App;
