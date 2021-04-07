import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567' }])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        const personObject = {
            name: newName,
            number: newNumber,
        }
        if (persons.some(persons => persons.name === newName)) {
            window.alert(`${newName} already in the phonebook!`)
        }
        else {
            setPersons(persons.concat(personObject))
            setNewName('')
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const Person = (props) => <p>{props.name} {props.number}</p>

    return (
        <div>
            <h2>Phonebook</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange} />
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange} />
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
            <h2>Numbers</h2>
            {persons.map(person => <Person key={persons.indexOf(person)} name={person.name} number={person.number} />)}
        </div>
    )
}

export default App