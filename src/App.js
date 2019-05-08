import React, { Component } from 'react'
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import { Router } from '@reach/router'
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

  createContact = contact => {
    ContactAPI.create(contact).then(contact => {
      this.setState(prevState => ({
        contacts: prevState.contacts.concat([contact])
      }))
    })
  }

  render() {
    return (
      <Router>
        <ListContacts
          path="/"
          contacts={this.state.contacts}
          onDeleteContact={this.removeContact}
        />
        <CreateContact
          onCreateContact={contact => this.createContact(contact)}
          path="/create"
        />
      </Router>
    )
  }
}

export default App
