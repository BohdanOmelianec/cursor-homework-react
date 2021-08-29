import React, { useEffect, useState } from 'react';
import './style18.css'
import CheckboxFilter from './components/CheckboxFilter';
import Contact from './components/Contact';



const contacts = [{
    id: 1,
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male"
}, {
    id: 2,
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female"
}, {
    id: 3,
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666"
}, {
    id: 4,
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female"
}, {
    id: 5,
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male"
}, {
    id: 6,
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380956319521",
    gender: "male"
}];

function Contracts() {
    const [contactsArr, setContacts] = useState(contacts);
    const [search, setSearch] = useState('');
    const [checkedBoxes, setCheckedBoxes] = useState()


    useEffect(() => {
        const regExp = new RegExp(search, 'gi');
        let filteredContacts = contacts.filter(contact => {
            return Object.values(contact).some(item => 
                item.toString().search(regExp) >= 0
            );
        });

        filteredContacts = checkedBoxes ? filteredContacts.filter(contact => {
                    if (!contact.gender && checkedBoxes.includes("undefined")) {
                        return true;
                    }
                    return checkedBoxes.includes(contact.gender);
                }) : filteredContacts
                ;
        setContacts(filteredContacts)

    }, [search, checkedBoxes]);
    

    useEffect(() => {
        const inputs2 = document.querySelectorAll('input[type="checkbox"]');
        inputs2.forEach(input => {
            input.checked = true
        });
    }, [])

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }


    const handleCheckbox = () => {
        const checkedInputs = document.querySelectorAll('input[type="checkbox"]:checked');
        let checkedBoxesArr = [];
    
        checkedInputs.forEach(input => {
                checkedBoxesArr.push(input.value)
        });

        setCheckedBoxes(checkedBoxesArr);
    }

    return(
        <div className="inner">
            <div className="container_hw18">
                <h2 className="title">Contacts</h2>
                <input 
                    className="search_input" 
                    placeholder="SEARCH" 
                    type="search" 
                    name="search" 
                    onChange={handleSearchChange} 
                    value={search}
                />
                <CheckboxFilter onChange={handleCheckbox}/>
                {contactsArr.map(contact => 
                    <Contact key={contact.id} contact={contact}/>
                )}
            </div>
        </div>       
    ) 
}

export default Contracts;