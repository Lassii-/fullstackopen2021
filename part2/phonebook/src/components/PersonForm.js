import React from 'react'

const PersonForm = ({ persons, setPersons, newName, setNewName, newNumber, setNewNumber }) => {
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
                setNewNumber('')
            }
        }
        else {
            window.alert(`You need to input both the name and number!`)
        }
    }
    return (
        <form onSubmit={addPerson}>
            <div>
                Name: <input value={newName} onChange={event => setNewName(event.target.value)} />
            </div>
            <div>
                Number: <input value={newNumber} onChange={event => setNewNumber(event.target.value)} />
            </div>
            <div>
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default PersonForm