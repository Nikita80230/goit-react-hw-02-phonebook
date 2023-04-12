import { Component } from "react"

export class ContactsList extends Component {
    state = {
        contactsFromPhonebook: "",
    }
    // this.props.contactsArray
    
    handleChange = (event) => {
        // console.log(event.currentTarget.value)

        this.setState({
            contactsFromPhonebook: event.currentTarget.value,
        })

        this.props.searchNameInPhonebook(this.state.contactsFromPhonebook)

    }

    

    render() {
        console.log(this.state)
        return (
            <>
                <h2>Contacts</h2>
                <input
                    name="inputName"
                    onChange={this.handleChange}
                    type="text"
                    value={this.state.contactsFromPhonebook}
                />
                <ul className="contacts__list">{this.props.children}</ul>
            </>
        )
    }
}

// = ({ children, contactsArray }) =>