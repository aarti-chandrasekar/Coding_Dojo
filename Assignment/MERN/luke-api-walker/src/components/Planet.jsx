import React from 'react'

const Planet = ({ data }) => {
  console.log("People *** ", data)
  return (
    <div className="row d-flex justify-content-center">
      {data.error ?
        <div className="bg-dark   w-75 text-center" >
          <h1>{data.error}</h1>
          <img alt="Star Wars Obi Wan Kenobi " style={{ width: 100 }}
            src='https://www.pngall.com/wp-content/uploads/9/Star-Wars-Obi-Wan-Kenobi-PNG-Free-Image.png' />
        </div>
        :
        <div className="bg-dark   w-75 " >
          <h2>{data.name}</h2>
          <h5>Terrain : {data.terrain}</h5>
          <h5>Climate : {data.climate}</h5>
          <h5>Population : {data.population}</h5>
          <h5>Gravity : {data.gravity}</h5>
        </div>}

    </div>
  )
}

export default Planet