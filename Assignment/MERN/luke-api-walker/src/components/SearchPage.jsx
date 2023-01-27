import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import People from './People';
import Planet from './Planet';


const SearchPage = () => {

    const [resource, setResource] = useState("people");
    const [id, setId] = useState("");
    const [idError, setIdError] = useState("");
    const [isSubmit, setIsSubmit] = useState(0);
    const [apiData, setApiData] = useState({});

    const navigate = useNavigate();

    const url = `https://swapi.dev/api/${resource}/${id}`;

    useEffect(() => {
        if (resource && id) {
            axios.get(url)
                .then(response => {
                    console.log("axios res - ", response.data);
                    
                    // Get the homeworld name
                    if (resource === "people") {
                        console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$", response.data.homeworld)
                        axios.get(response.data.homeworld)
                        .then(resPeople => {
                            console.log("axios res homeworld- ", resPeople.data);
                            const index = response.data.homeworld.search("/planets/")
                            setApiData({...response.data, homeworld_name : resPeople.data.name, 
                                homeworld_link : response.data.homeworld.slice(index),
                                homeworld_id : response.data.homeworld.slice(index+9).replace("/", ""),
                                resource});
                        }).catch(err => {
                            console.log(err);
                        });                        
                    } else {
                        setApiData({...response.data, resource});
                    }
                }).catch(err => {
                    console.log(err);
                    setApiData({ error: "These aren't the droids you are looking for" , resource})
                });

        }
    }, [isSubmit])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!idError) {
            setIsSubmit(isSubmit + 1)
            navigate(`/${resource}/${id}`);
        }
    }

    const handleId = (e) => {
        setIdError(isNaN(e.target.value) ? "Not a valid ID" : "");
        setId(e.target.value);
    }

  const navigateToPlanet = () => { 
    setResource("planets")
    setId(apiData.homeworld_id)
    setIsSubmit(isSubmit+1)
    navigate(apiData.homeworld_link);
   }


    console.log(url, "**********",isSubmit)

    return (
        <>
            <form onSubmit={handleSubmit} className="row d-flex justify-content-center">
                <div className="bg-dark   w-75 text-center" >
                    {/* <!-- Resource --> */}
                    <label htmlFor="resource" className="text-white me-2">Search for </label>
                    <select name="resource" id="resource"
                        onChange={e => setResource(e.target.value)}
                        value={resource} className="rounded me-4" >
                        <option value="people">people</option>
                        <option value="planets">planets</option>
                    </select>

                    {/* <!-- Id --> */}
                    <label htmlFor="id" className="text-white me-2">Id </label>
                    <input type="text" name="id" id="id"
                        onChange={handleId}
                        value={id} className="rounded me-4" />

                    <input type="submit" value="Search" />

                    <p className="text-danger">{idError}</p>
                </div>

            </form>

            {/* People Search Result Component */}
            {(Object.keys(apiData).length !== 0 && apiData.resource === "people" ) ? 
                <People data={apiData} navigateToPlanet={navigateToPlanet}/> : ""}

            {/* Planet Search Result Component */}
            {(Object.keys(apiData).length !== 0 && apiData.resource === "planets" ) ? <Planet data={apiData} /> : ""}
        </>
    )
}

export default SearchPage