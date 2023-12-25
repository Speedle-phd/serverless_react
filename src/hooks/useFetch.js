import axios from 'axios'
import {useEffect, useState, useCallback} from 'react'

const useFetch = (url) => {
   const [state, setState] = useState(null)

   const getData = useCallback(async() => {
      const res = await axios.get(
         url,
         {
            headers: {
               // mode: 'no-cors',
               // 'Access-Control-Allow-Origin': '*',
               'Content-Type': 'application/json'
            },
         }
      )
      console.log(res)
      setState(res.data)
   },[url])

   useEffect(() => {
      getData()
   }, [getData])

   return state
}

export default useFetch