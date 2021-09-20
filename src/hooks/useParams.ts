import { useLocation } from "@reach/router";
import { UrlParams } from "../helpers/UrlParams";
import { useEffect, useState } from "react";




const useParams = () => {
    const location = useLocation()
    const [params, setParams] = useState(new UrlParams(typeof window !== `undefined`? window?.location?.hash : location.hash))

    useEffect(()=>{
        const link = typeof window !== `undefined`? window?.location?.hash : location.hash
        const newParams = new UrlParams(link)
        setParams(newParams)
    },[location])

    return params
}


export default useParams