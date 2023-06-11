import React from 'react'

export default function Table({user}) {
  return (
      <table width={"95%"} frame="box" rules="all" style={{marginLeft:"15px"}}>
      <thead>
        <tr>
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>EMAIL</th>
          <th>CITY</th>
        </tr>
      </thead>
     {user.map((ele)=>{
      return <tbody>
      <tr>
        <td>
          <img src={ele.picture.medium} alt="" />
        </td>
        <td>{ele.name.first}</td>
        <td>{ele.gender}</td>
        <td>{ele.email}</td>
        <td>{ele.location.city}</td>
      </tr>
    </tbody>
     })}
    </table>
  )
}
