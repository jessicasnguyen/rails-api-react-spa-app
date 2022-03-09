import React, { useState } from 'react'

const DragonForm = (props) => {
    const [color, setColor] = useState(props.color || '')
    const [variety, setVariety] = useState(props.variety || '')
    const [element, setElement] = useState(props.element || '')
    const [personality, setPersonality] = useState(props.personality || '')
    const [alignment, setAlignment] = useState(props.alignment || '')
    const [age, setAge] = useState(props.age || '')
    const [hp, setHp] = useState(props.hp || '')
    const [cr, setCr] = useState(props.cr || '')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(props.id) {
            props.updateDragon({color, variety, element, personality, alignment, age, hp, cr, id:props.id})
        } else {
            props.addDragon({color, variety, element, personality, alignment, age, hp, cr})
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <p>Color: <input value={color} onChange={(e) => setColor(e.target.value)} /></p>
            <p>Variety: <input value={variety} onChange={(e) => setVariety(e.target.value)} /></p>
            <p>Element: <input value={element} onChange={(e) => setElement(e.target.value)} /></p>
            <p>Personality: <input value={personality} onChange={(e) => setPersonality(e.target.value)} /></p>         
            <p>Alignment: <input value={alignment} onChange={(e) => setAlignment(e.target.value)} /></p>       
            <p>Age: <input value={age} onChange={(e) => setAge(e.target.value)} /></p>       
            <p>HP: <input value={hp} onChange={(e) => setHp(e.target.value)} /></p> 
            <p>CR: <input value={cr} onChange={(e) => setCr(e.target.value)} /></p>
            <hr />
            <button>{props.id ? 'Update' : 'New'}</button>
        </form>
    )
}


export default DragonForm