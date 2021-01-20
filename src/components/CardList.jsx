import React, {useState, useEffect} from "react";
import axios from 'axios'
import Card from './Card'
import './CardList.css'


const CardList = (props) => {
  const [monsters, setMonsters] = useState([])

  useEffect(() => {
   axios.get(`https://jsonplaceholder.typicode.com/users`)
   .then(response => {console.log(response)
    setMonsters(response.data)
   })
   .catch(error => {console.log(error)})
  },[])
  return(
    <div className="card-list">
      {monsters.map(item => 
      <Card key={item.id} card={item}/>)}
    </div>
  )
}

export default CardList