import { useStaticQuery, graphql } from "gatsby"
import { useLocation } from "@reach/router"
import React,{ useEffect, useState } from "react"

const useParams = () => {
    const location = useLocation()
    const [params, setParams] = useState(new URLSearchParams(location.search))

    useEffect(()=>{
        const newParams = typeof window !== `undefined`? window?.location?.search : location.search
        setParams(new URLSearchParams(newParams))
    },[location.search,window?.location?.search])
    return params
}


export default useParams