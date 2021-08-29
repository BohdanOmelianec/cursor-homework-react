import { useState } from "react";
import { useRouteMatch, Route, NavLink } from "react-router-dom";
import ContactInfo from "./ContactInfo";

const male = 'https://image.flaticon.com/icons/png/512/1340/1340619.png';
const female = 'https://image.flaticon.com/icons/png/512/766/766514.png';
const unknown = 'https://image.flaticon.com/icons/png/512/57/57108.png';
const user_icon = 'https://image.flaticon.com/icons/png/512/456/456212.png';

export default function Contact({contact}) {
    const match = useRouteMatch();
    const [top, setTop] = useState(0);

    const clickHandler = (e) => {
        setTop(e.target.offsetTop);
    }

    return(
        <div className="contact_box">
            <div className="content_box_user">
                <img src={user_icon} className="user" alt="user"></img>
                <NavLink to={`${match.url}/${contact.firstName}/${contact.id}`}  onClick={clickHandler}>
                    <span  className="user_link" >{`${contact.firstName} ${contact.lastName}`}</span>
                </NavLink>
                <img className="gender" src={contact.gender === "male" ? male : contact.gender === "female" ? female : unknown} alt="gender"></img>
            </div>
            <p>{contact.phone}</p>

            <Route path={`${match.url}/${contact.firstName}/:id`}>
                <ContactInfo contact={contact} top={top} />
            </Route>
            <hr/>
        </div> 
    )
}