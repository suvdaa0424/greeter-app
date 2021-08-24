import React, { useState } from 'react'
function ShoppingList() {
    const [item, setItem] = useState('')
    // to store our new list we created a 
    // new useState to store an empty array
    const [list, setList] = useState([])
    function addItem(event) {
        event.preventDefault()
        // instead of using array.push to add items to our shopping list array, we have to use the setList function from the useState variable and make it look like the example below  (effectively does same thing as a push)
        setList(list => [...list, item])
        setItem('')
        console.log(list)
    }
    return (
        <div>
            <h2>Shopping List</h2>
            {/* we do not need to add parenthesis to the onSubmit attribute because it alrady expects a function */}
            <form onSubmit={addItem} >
                <input value={item} onChange={(e) => setItem(e.target.value)} />
                <button type="submit" >New Item</button>
            </form>
            <ol>
                {list.map((shoppingItem, index) => {
                    return (
                        <li key={index}>{shoppingItem}</li>
                    )
                })}
            </ol>
        </div>
    )
}
export default ShoppingList
