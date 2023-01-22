import React, { useEffect, useState } from 'react'
import Youtube from 'react-youtube'
import './Rowpost.css'
import axios from '../../Axios'
import {imageUrl} from '../../Constants/Constants'
function Rowpost(props) {
   const [movies, setMovies] = useState([])
  
  useEffect(()=>{
    axios.get(props.url).then((res)=>{
      //console.log(res.data.results)
      setMovies(res.data.results)
    })
  },[])

  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  }
  const movietrailer=(id)=>{
    console.log(id)
    axios.get()
  }
  return (<div className='row'>
  <h2>{props.title}</h2>
 <div className="posters">
    {movies.map((obj)=>{
     return <img onClick={()=>{movietrailer(obj.id)}} className={props.isSmall? 'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} />
    })}
 </div>
 <Youtube opt={opts} videoId='X0tOpBuYasI'/>
 </div>
    
   
  )
}

export default Rowpost