import React from 'react'

const People = ({ data, navigateToPlanet }) => {
  console.log("People *** ", data)

  const handleNavigatePlanet = (e) => {
    navigateToPlanet();
}

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
          <h5>Home World : <a href="#" onClick={handleNavigatePlanet} className="link-secondary"> 
            {data.homeworld_name}</a></h5> 
          <h5>Gender : {data.gender}</h5>
          <h5>Height : {data.height}</h5>
          <h5>Mass : {data.mass}</h5>
          <h5>Eye Color : {data.eye_color}</h5>
        </div>}
    </div>
  )
}

export default People