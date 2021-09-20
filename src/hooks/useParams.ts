import { useLocation } from "@reach/router";
import { UrlParams } from "../helpers/UrlParams";
import { useEffect, useState } from "react";




const useParams = () => {
    const location = useLocation()
    const [params, setParams] = useState(new UrlParams(location.hash))

    useEffect(()=>{
        const link = location.hash
        const newParams = new UrlParams(link)
        setParams(newParams)
    },[location])

    return params
}


export default useParams