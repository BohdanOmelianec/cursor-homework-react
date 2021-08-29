import { useEffect } from "react";

export default function ContactInfo({contact, top}) {
    useEffect(() => {
        document.querySelector('.contact_info').style.top = `${top - 30}px`;
    });

    return(
        <div className='contact_info'>
            <p><b>{contact.firstName}</b></p>
            <p><b>{contact.lastName}</b></p>
            <p>{contact.phone}</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dignissimos aperiam ut distinctio iure sapiente consectetur repellendus enim facere inventore explicabo iste eum alias voluptate cum dolor dicta, aliquid eaque.</p>
        </div>
    )
}