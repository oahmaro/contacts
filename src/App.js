import React, { Component } from 'react'
import ListContacts from './ListContacts'
import * as ContactAPI from './utils/ContactAPI'

class App extends Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    ContactAPI.getAll().then(contacts =>
      this.setState(() => ({
        contacts
      }))
    )
  }

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(c => {
        return c.id !== contact.id
      })
    }))

    ContactAPI.remove(contact)
  }

  render() {
    return (
      <div>
        <ListContacts
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
      </div>
    )
  }
}

export default App
