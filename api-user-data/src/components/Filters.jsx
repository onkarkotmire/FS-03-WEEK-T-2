import React from 'react'

export default function Filters({setUser , filteredData}) {
  return (
    <div style={{marginLeft:"15px"}}>
        <input type="radio" name="gender" value="all" onChange={()=>{
          setUser(filteredData);
        }} />All
        <input type="radio" name="gender" value="male" onChange={()=>{
         setUser(filteredData.filter(data => data.gender === "male" ))
        }}/>Male
        <input type="radio" name="gender" value="female" onChange={()=>{
          setUser(filteredData.filter(data => data.gender === "female"))
        }} />Female
        </div>
  )
}
