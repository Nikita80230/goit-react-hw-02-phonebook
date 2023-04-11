import { Component } from "react";

export class Phonebook extends Component {

  state = {
    inputValues: [],
  }
  
  handleChange

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addNewContact({
      name: event.currentTarget.name.value,
      tel: event.currentTarget.number.value
    })

  }


  render() {
    return (
        <div className="input-group input-group-lg">
        <h2>Name</h2> 
        <form onSubmit={this.handleSubmit} >
          <label htmlFor="">
            Name
            <input    
              // onChange={e=> console.log(e.target.value)}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>  
          <label htmlFor="">
            Tel
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>  
          <button type="submit">Add contact</button>
        </form>
        </div>
    )
  }
}