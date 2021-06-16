import React, {useState} from "react";
import Person from './Components/Person'

const App = (props) => {
    const [persons, setPersons] = useState(props.persons)
    const [newName, setNewName] = useState('')
    const [newNum, setNewNum] = useState('')
    const [showAll,  setShowAll] = useState(true)
    const [filterName, setFilterName] = useState('')
    let personsNames = persons.map(person => person.name)
    const check_name = (personsNames.indexOf(newName) in personsNames)

    const personToShow = showAll
        ? persons
        : persons.filter(person => person.name.toLowerCase().includes(filterName.toLowerCase()))

    const addPerson = (event) => {
        event.preventDefault()
        if (!check_name) {
            personsNames.push(newName)
            console.log(personsNames)
            const personObject = {
                id: persons.length + 1,
                name: newName,
                number: newNum
            }
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNum('')
        }
        else{
            alert(`${newName} is already added to phonebook`)
            setNewName('')
            setNewNum('')
        }
    }

    const handleNumberChange = (event) => {
        setNewNum(event.target.value)
    }

    const handlePersonChange = (event) => {
        setNewName(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilterName(event.target.value)
    }

    function Form() {
        return (
            <form onSubmit={addPerson}>
                <div>
                    name: <input
                    value={newName}
                    onChange={handlePersonChange}
                />
                </div>
                <div>
                    number: <input
                    value={newNum}
                    onChange={handleNumberChange}
                />
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        )
    }

    function Persons() {
        return (
            personToShow.map(person =>
                <Person key={person.id} person={person} />
            )
        )
    }

    return (
        <div>
            <h2>Phonebook</h2>
            <div onFocus={() => setShowAll(!showAll)} onBlur={() => setShowAll(!showAll)}>
                filter shown with: <input value={filterName} onChange={handleFilterChange} />
            </div>
            <h2>add a new</h2>
            <Form />
            <h2>Numbers</h2>
            <Persons />
        </div>
    )
}

export default App;