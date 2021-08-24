import React, { useEffect, useState } from "react";

function DogImage() {
    const [dogImage, setDogImage] = useState("");

    // equivalent to componentDidMount
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                setDogImage(data.message);
            });
    }, []); // empty dependencies array means only run once



    return (
        <div>
            <h2>More doggos please</h2>
            <img src={dogImage} alt="Great looking dog" />
        </div>
    );
}

export default DogImage;