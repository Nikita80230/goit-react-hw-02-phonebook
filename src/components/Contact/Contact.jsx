export const Contact = ({name, tel}) => {
    
    return (
        <li className="contact__item">
            <span>{name}: {tel}</span>
        </li>
        
    )
}
