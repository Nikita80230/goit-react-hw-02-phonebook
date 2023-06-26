export const Contact = ({ name, number }) => {

    return (
        <li className="contact__item">
            <span>{name}: {number}</span>
        </li>

    )
}
