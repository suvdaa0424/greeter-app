import React from 'react'

function Name(props) {
    const firstInitial = props.firstName[0]
    return (
        <div>
            {firstInitial}. {props.lastName}
        </div>
    )
}

export default Name