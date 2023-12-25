import React from 'react'
import useFetch from '../hooks/useFetch'
const Basic = () => {
   const state = useFetch(
      'https://papaya-crumble-44195e.netlify.app/api/2-basic-api'
   )
   console.log(state)
  return (
    <div>
      {JSON.stringify(state)}
    </div>
  )
}

export default Basic
