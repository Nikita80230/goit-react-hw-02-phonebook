import { Component } from "react"
import css from "./ContactsLists.module.css"

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

        this.props.searchNameInPhonebook(event.currentTarget.value)

    }



    render() {
        console.log(this.state)
        return (
            <>
                <h2>Contacts</h2>
                <div className={css.contactWrapper}>
                    <span>Find contacts by name</span>
                    <input
                        name="inputName"
                        onChange={this.handleChange}
                        type="text"
                        value={this.state.contactsFromPhonebook}
                    />
                </div>
                <ul className="contacts__list">{this.props.children}</ul>
            </>
        )
    }
}

// = ({ children, contactsArray }) =>