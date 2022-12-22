import React from 'react'

export const Client= (Props) => {
  return (
    <>
    <div className="client">
        <p>{Props.heading}</p>
        <p>{Props.para}</p>
    </div>
    </>
  )
}
