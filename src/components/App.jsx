
import { Component } from "react";
import { Phonebook } from "./Phonebook/Phonebook";
import { ContactsList } from "./ContactsList/ContactsList";
import { Contact } from "./Contact/Contact";

import { nanoid } from 'nanoid'



export class App extends Component{

  state = {
  contacts: [],
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
              .filter(({ name }) =>  name.includes(this.state.name) )
              .map(({ name, tel }) => {
                  return (
                      <Contact name={name} tel={tel} key={nanoid()}/>
                    )
                  }) :  this.state.contacts.map(({ name, tel }) => {
                  return (
                      <Contact name={name} tel={tel} key={nanoid()}/>
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