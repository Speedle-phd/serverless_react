import React from 'react'
import useFetch from '../hooks/useFetch'
const Serverless = () => {
   const data = useFetch('/api/airtable')
   
  return (
    <div>
      {data?.map(el => {
         const image = el?.fields.image[0].url
         const {id} = el
         return (
            <React.Fragment key={id}>
               <img src={image} width={"200px"} alt="Product"/>
            </React.Fragment>
         )
      })}
    </div>
  )
}

export default Serverless
