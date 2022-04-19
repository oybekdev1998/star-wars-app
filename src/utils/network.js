
export const getAllData = async (url) => {
    try {
        const res = await fetch(url)

        if(!res.ok){
            console.log('Could not fetch data', res.status);
            return false
        }
        return await res.json()
    }
    catch(error) {
        console.error('Error', error.message);
        return false;
    }
}

// (async () => {
//     const body = getAllData(SWAPI_ROOT+SWAPI_PEOPLE);
//     console.log(body);
// })();
