import React from "react";


class Pancake extends React.Component {
  // constructor because of state
  constructor() {
    super();
    this.state = {
      pancakes: 0
    };
  }
  updatePancake = (value) => {
        this.setState({
        pancakes: value
    })
}
pancakes = () => {
  let string = ""
  for (let index = 0; index < this.state.pancakes; index++) {
    string += "🥞"
    
  }
  return string
}



  // render
  render() {
    return (
      <div>
        <h2>Pancakes</h2>
          <label>
            Quantity
            <input
              value={this.state.pancakes}
              onChange={(e) => this.updatePancake(e.target.value)}
            />
          </label>
          <br />
          <div>{this.pancakes()}</div>
                


      </div>
    );
  }
}

export default Pancake;

// import React, { useState } from 'react'

// function Pancake() {
//     const [quantity, setQuantity] = useState('')
    
//     function pancakes()  {
//         let string = ""
//         for (let index = 0; index < quantity; index++) {
//             string += '🍜'
            
//         }return string
//     }
//     return (
//         <div>
//             <label>Enter the Quantity of pancakes you want made:</label>
//             <input value={quantity} onChange={(e) => setQuantity(e.target.value) } />
//             <p>{pancakes()}</p>
//         </div>
//     )
// }

// export default Pancake