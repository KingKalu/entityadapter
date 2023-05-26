import boxarray from './boxarray'
import Box from './Box'
import './Card.css'
import { useState } from 'react'
function Card() {
    const [boxes, setBoxes] = useState(boxarray)
    const toggle = (id) => {
        setBoxes(prev => {
        const oldbox = prev.find(box => id == box.id)
        oldbox.on = !oldbox.on
        return [...prev]
        })
       
    }
  return (
    <div className='item' >
        {boxes.map(box => (
            <Box toggle={toggle} key={box.id} id={box.id} on={box.on} />
        ))}
    </div>
  )
}

export default Card