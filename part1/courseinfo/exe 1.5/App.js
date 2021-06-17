import './App.css';
import ReactDOM from 'react-dom';


const App = () => {
  const cor = {
      name: 'Half Stack application development',
      par: [
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
          <Header cor={cor.name} />
          <Content par={cor.par} />
          <Total par={cor.par} />
      </div>
  )
}

const Header = ({cor}) => {
  return (
      <h1>{cor}</h1>
  )
}

const Part = ({part}) => {
  return (
      <p>
          {part.name} {part.exercise}
      </p>
  )
}

const Content = ({par}) => {
  return (
      <div>
          <Part part={par[0]} />
          <Part part={par[1]} />
          <Part part={par[2]} />
      </div>
  )
}

const Total = ({par}) => {
  return (
      <p>Number of exercise {par[0].exercise + par[1].exercise + par[2].exercise}</p>
  )
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;