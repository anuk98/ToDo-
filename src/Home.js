import React from 'react'
import {useQuery} from '@tanstack/react-query'
import Axios from 'axios'

function Home() {
    const {data,isLoading,error,refetch}=useQuery(['cat'],()=>{
 return Axios.get('https://jsonplaceholder.typicode.com/posts').then((res)=>{
    return(res.data)
})
    })
    if(isLoading){
        return<h1>Loading</h1>
    }
  return (
    <div>
        <h1>{data}</h1>
    </div>
  )
}

export default Home