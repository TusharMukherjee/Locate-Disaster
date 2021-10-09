import React from 'react'

const List = () => {

    let list = [
        "Earthquake",
        "Floods",
        "Sea and Lake",
        "Snow",
        "Temperature",
        "Volcanoes",
        "WildFires"
    ]

    return (
        <div className="list-div">
            {list.map(cat => (<button className="list-button">{cat}</button>))}
        </div>
    )
}

export default List
