import React from 'react'
import Person from './Person'

const Persons = ({ filter, persons }) => {
    return (
        persons.filter(person => {
            if (!filter) {
                return true
            }
            if (person.name.includes(filter)) {
                return true
            }
        }).map(person => <Person key={persons.indexOf(person)} name={person.name} number={person.number} />)

    )
}

export default Persons