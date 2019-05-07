import React from 'react'

class ContactList extends React.Component {
  render() {
    const people = this.props.contacts

    return (
      <ol>
        {people.map(person => (
          <li key={person.name}>{person.name}</li>
        ))}
      </ol>
    )
  }
}

function App() {
  return (
    <div className="App">
      <ContactList
        contacts={[{ name: 'Tyler' }, { name: 'Karen' }, { name: 'Richard' }]}
      />
      <ContactList
        contacts={[{ name: 'Osama' }, { name: 'Ahmad' }, { name: 'Hamza' }]}
      />
    </div>
  )
}

export default App
