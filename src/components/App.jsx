
import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { ContactsList } from "./ContactsList/ContactsList";
import { Contact } from "./Contact/Contact";

import { nanoid } from 'nanoid'



export class App extends Component {

  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: ''
  }

  addNewContact = (data) => {
    // console.log(data)
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))
  }

  searchNameInPhonebook = (nameToFind) => {
    this.setState({
      name: nameToFind
    })

  }

  render() {
    // console.log(this.state)
    return (
      <div>
        <Phonebook addNewContact={this.addNewContact} />
        <ContactsList
          searchNameInPhonebook={this.searchNameInPhonebook} contactsArray={this.state.contacts}
        >
          {
            this.state.name ? this.state.contacts
              .filter(({ name }) => name.includes(this.state.name))
              .map(({ name, number }) => {
                return (
                  <Contact name={name} number={number} key={nanoid()} />
                )
              }) : this.state.contacts.map(({ name, number }) => {
                return (
                  <Contact name={name} number={number} key={nanoid()} />
                )
              })

            // }
            // this.state.contacts.map(({ name, tel }) => {
            //   return (
            //     <Contact name={name} tel={tel} key={nanoid()}/>
            //   )
            // })
          }
        </ContactsList>
      </div>
    );
  }
};
  // this.state.contacts.map(({ name, tel }) => {
          // return (
          //   <Contact name={name} tel={tel} key={nanoid()}/>
          // )
          // })
        // if (this.state.name){
        //     this.state.contacts.filter(({ name }) => {
        //       name.includes(this.state.name)
        //     })
        //     }