import React, { useState } from 'react'
function AddressBook() {
    const [data, setData] = useState({
        name: "",
        email: "",
        phone: ""
    })
    const [list, setList] = useState([])
    function handleSubmit(event) {
        event.preventDefault()
        setList(list => [...list, data])
        setData({...data, name:'', email:'', phone:''})
        console.log(list)
    }
    return (
        <div>
            <h2>Address Book</h2>
            <form onSubmit={handleSubmit} >
                <label for="name" >Name</label>
                <input  id='name' value={data.name} onChange={(e) => setData({...data, name:e.target.value})} />
                <label for="email" >Email</label>
                <input  id='email' value={data.email} onChange={(e) => setData({...data, email:e.target.value})} />
                <label for="phone" >Phone</label>
                <input  id='phone' value={data.phone} onChange={(e) => setData({...data, phone:e.target.value})} />
                <button type="submit" >Add New Contact</button>
            </form>
            <h2>List of Contacts</h2>
            <ol>
            {list.map((contact, index) => {
                return (
                    <li key={index}>Name:{contact.name} Email:{contact.email} Phone:{contact.phone}</li>
                )
            })}
            </ol>
        </div>
    )
}
export default AddressBook













