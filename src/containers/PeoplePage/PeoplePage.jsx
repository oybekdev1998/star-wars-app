import React, { useEffect, useState } from 'react';
import {getAllData} from "../../utils/network";
import {GET_PEOPLE_DATA} from "../../constants/api";


const PeoplePage = () => {
    const [people, setPeople] = useState(null)
    const getPeople = async (url) => {
        const people = await getAllData(url)

        people.results.map(({name, url}) =>{
            return {
                name,
                url
            }
        })
        setPeople(people)
    }


    useEffect(() => {
        getPeople(GET_PEOPLE_DATA)
    },[]);

    return (
        <>People Page</>
    )
}

export default PeoplePage;