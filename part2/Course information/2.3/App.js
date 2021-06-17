import React from 'react';

const Header = ({name}) => <h2>{name}</h2>;

const Content = ({parts}) => {

    const tot = parts.reduce((sum, cPart) => sum + cPart.exercises, 0);

    return (
        <div>
            {parts.map(part => <Part part={part} key={part.id} />)}
            <p><strong>total of {tot} exercises</strong></p>
        </div>
    );
};


const Part = ({part}) => <p>{part.name} {part.exercises}</p>;

const Course = ({course}) => {
    return (
        <div>
            <Header name={course.name} />
            <Content parts={course.parts} />
        </div>
    );
};
const App = () => {
    const courses = [
        {
            name: 'Half Stack application development',
            id: 1,
            parts: [
                {
                    name: 'Fundamentals of React',
                    exercises: 10,
                    id: 1
                },
                {
                    name: 'Using props to pass data',
                    exercises: 7,
                    id: 2
                },
                {
                    name: 'State of a component',
                    exercises: 14,
                    id: 3
                },
                {
                    name: 'Redux',
                    exercises: 11,
                    id: 4
                }
            ]
        }, 
    ];
  
    return (
        <div>
            {courses.map(course => <Course course={course} key={course.id} />)}
        </div>
    );
};

export default App;