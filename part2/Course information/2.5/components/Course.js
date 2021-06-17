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

export default Course;
