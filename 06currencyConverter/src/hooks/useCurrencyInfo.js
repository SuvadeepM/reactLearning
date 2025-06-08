import { useEffect, useState } from "react";

function useCurrencyInfo(currency) { // unspoken / undocumented rule is to append "use" before any hooks.
    const [data, setData] = useState({})
    // fetch()
    useEffect(()=> {
        // this url is not working currently, need to change it to another url in next project
        let url = `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
        fetch(url)
          .then((response)=>  response.json())
          .then ((response)=> setData(response[currency]))
        console.log(data);
    }, [currency])
    return data
}

export default useCurrencyInfo;