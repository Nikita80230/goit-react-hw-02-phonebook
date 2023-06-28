import { Component } from 'react';
import { Filter } from 'components/ContactsList/Filter/Filter';

export class ContactsList extends Component {
    render() {
        return (
            <>
                <h2>Contacts</h2>
                <Filter searchNameInPhonebook={this.props.searchNameInPhonebook} />
                <ul className="contacts__list">{this.props.children}</ul>
            </>
        );
    }
}
