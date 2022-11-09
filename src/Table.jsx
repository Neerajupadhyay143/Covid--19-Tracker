import React from 'react'
import './Table.css'
function Table({countries}) {
  return (
    <div className='table'>
   
        {countries.map((items)=>(
          
            <tr> 
                <td>{items.country}</td>
                <td><strong>{items.cases}</strong></td>
            </tr>
           
        ))}
    </div>
  )
}

export default Table;