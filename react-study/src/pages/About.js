import React from 'react'

const About = ({match,number,name, onClick}) => {
    return (
        <div>
            <h2>
                {console.log(match)}
                어바웃 {match && match.params.name}
                {number}
                {name}
                <button onClick={()=>onClick(number)}>+</button>
            </h2>
        </div>
    )
}

export default About
