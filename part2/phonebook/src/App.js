import React, { useState } from 'react'

const App = () => {
    const [persons, setPersons] = useState([
        { name: 'Arto Hellas', number: '040-123456' },
        { name: 'Ada Lovelace', number: '39-44-5323523' },
        { name: 'Dan Abramov', number: '12-43-234345' },
        { name: 'Mary Poppendieck', number: '39-23-6423122' }
    ])
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        /* Trim the inputs */
        const newNameTrimmed = newName.trim()
        const newNumberTrimmed = newNumber.trim()
        const personObject = {
            name: newNameTrimmed,
            number: newNumberTrimmed,
        }
        /* Make sure both input fields are filled */
        if (newNameTrimmed && newNumberTrimmed) {
            /* Check if the name exists in the persons-array already 
               Turn both lowercase for the comparison to catch all case variants */
            if (persons.some(persons => persons.name.toLowerCase() === newNameTrimmed.toLowerCase())) {
                if (persons.some(persons => persons.number === newNumberTrimmed)) {
                    window.alert(`${newNameTrimmed} and ${newNumberTrimmed} already in the phonebook!`)
                }
                else {
                    window.alert(`${newNameTrimmed} already in the phonebook!`)
                }
            }
            /* Check if the number exists already */
            else if (persons.some(persons => persons.number === newNumberTrimmed)) {
                window.alert(`${newNumberTrimmed} already in the phonebook!`)
            }
            /* Add new name+number if everything is ok */
            else {
                setPersons(persons.concat(personObject))
                setNewName('')
            }
        }
        else {
            window.alert(`You need to input both the name and number!`)
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }
    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const personsToShow = showAll ? persons : notes.filter(note => note.important)

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