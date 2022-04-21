import React from 'react'

function Option({list}:any) {
  const {escolaridades} = list
  console.log(escolaridades);
  
  return (
    <>
      {escolaridades.map((option:any)=>(
        <option key={option.value} value={option.value}>{option.label} </option>
      ))}
    </>
  )
}

export default Option