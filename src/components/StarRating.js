import React from "react";

class StarRating extends React.Component {
    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         text: props.friendName
    //     };
    // }
    render() {
        const numberOfStars = this.props.rating;
        let star = "☆☆☆☆☆"
        if (numberOfStars === 1) {
            star = "★☆☆☆☆"
        } else if (numberOfStars === 2) {
            star = "★★☆☆☆"
        } else if (numberOfStars === 3) {
            star = "★★★☆☆"
        } else if (numberOfStars === 4) {
            star = "★★★★☆"
        } else if (numberOfStars === 5) {
            star = "★★★★★"
        }
        return (
            <div>
                {star}
            </div>
        )
    }
}

export default StarRating;