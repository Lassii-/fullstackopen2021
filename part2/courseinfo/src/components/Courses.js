import React from 'react'

const Courses = ({ courses }) => {
    const coursesParsed = courses.map((course) => {
        return (
            <div key={course.id}>
                <h2>{course.name}</h2>
                {
                    course.parts.map((part) =>
                        <p key={part.id}>{part.name} {part.exercises}</p>)
                }
                <h4>Total of {course.parts.reduce((i, j) => i + j.exercises, 0)} exercises</h4>
            </div>
        )
    })
    return (
        <div>
            <h1>Web Development Curriculum</h1>
            {coursesParsed}
        </div>
    )
}

export default Courses