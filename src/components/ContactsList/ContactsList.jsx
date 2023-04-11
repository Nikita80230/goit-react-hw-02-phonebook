import { Component } from "react"

export class ContactsList extends Component {
    state = {
        // savedContacts: []
    }
    // this.props.contactsArray
    
    render() {
        console.log(this.state)
        return (
            <>
                <h2>Contacts</h2>
                <input
                    // onChange={}
                    type="text"
                />
                <ul className="contacts__list">{this.props.children}</ul>
            </>
        )
    }
}

// = ({ children, contactsArray }) =>