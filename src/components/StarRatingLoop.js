import React from "react";

class StarRatingLoop extends React.Component {
    
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

export default StarRatingLoop;