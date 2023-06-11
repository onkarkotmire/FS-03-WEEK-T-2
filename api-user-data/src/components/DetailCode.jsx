import { useState } from 'react';
import './App.css';

//Detail code for understanding later i divided code into components for optimiza it.

function App() {

  const[user, setUser] = useState([])
  const[filteredData, setFilteredData] = useState([]); //onchange of radio button data should filter
  const getUser = () =>{
    fetch("https://randomuser.me/api/?results=20").then((res)=> res.json())
    .then((data)=>{
      console.log(data.results);
      setUser(data.results)
      setFilteredData(data.results)
    })
  }
  
 
  return (
    <div className="App">
    <h1>User Details</h1>
    <br />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae unde, magnam numquam illum voluptatem dolore minus. Illo molestias quae voluptatibus ipsa quaerat vero magnam nisi eum vel quam ipsum suscipit, itaque, fugiat perspiciatis consequuntur? Ea dicta vel eaque expedita quibusdam! Praesentium beatae reprehenderit, dolore consequuntur, voluptatum excepturi sapiente nulla repudiandae, natus vel atque. Unde culpa asperiores, ipsam dicta, impedit assumenda alias, vitae porro placeat exercitationem obcaecati numquam. Labore eligendi minima doloremque itaque placeat modi nobis odit commodi, asperiores maxime. Porro nostrum accusamus modi commodi voluptates repellendus amet adipisci nesciunt nihil atque architecto neque sapiente ea facere, explicabo delectus suscipit iste fugiat obcaecati maxime beatae aliquid quo. Laboriosam, neque in culpa quaerat a quasi doloremque dolorem illo. Nostrum sequi deleniti optio cupiditate vitae ipsa mollitia accusantium doloribus!</p>
    <button onClick={getUser}>Get User</button>
    <br />
    <br />
    {user.length>0 && (<div >
        <input type="radio" name="gender" value="all" onChange={()=>{
          setUser(filteredData);
        }} />All
        <input type="radio" name="gender" value="male" onChange={()=>{
         setUser(filteredData.filter(data => data.gender === "male" ))
        }}/>Male
        <input type="radio" name="gender" value="female" onChange={()=>{
          setUser(filteredData.filter(data => data.gender === "female"))
        }} />Female
        </div>)
    }
    <br />
    <br />
    {user.length >0 && (<table width={"100%"} frame="box" rules="all">
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
    </table>)}
    </div>
    
  );
}

export default App;