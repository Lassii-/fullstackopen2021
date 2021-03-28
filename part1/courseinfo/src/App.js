import React from 'react'

const Header = (props) => {
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    return (
        <p>{props.part} {props.exercises}</p>
    )
}

const Content = (props) => {
    const contentParsed = props.content.map((coursepart, index) => <Part key={index} part={coursepart.name} exercises={coursepart.exercises} />)
    return (
        <div>
            {contentParsed}
        </div>
    )
}

const Total = (props) => {
    return (
        <p>Number of exercises {props.total.reduce((i, j) => i + j.exercises, 0)}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            }
        ]
    }

    return (
        <div>
            <Header course={course.name} />
            <Content content={course.parts} />
            <Total total={course.parts} />
        </div>
    )
}

export default App