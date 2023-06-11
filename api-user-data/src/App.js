import { useState } from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import NavBar from './components/NavBar';

function App() {

  const[user, setUser] = useState([])
  const[filteredData, setFilteredData] = useState([]);
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
    <NavBar/>
    <h1>User Details</h1>
    <br />
    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae unde, magnam numquam illum voluptatem dolore minus. Illo molestias quae voluptatibus ipsa quaerat vero magnam nisi eum vel quam ipsum suscipit, itaque, fugiat perspiciatis consequuntur? Ea dicta vel eaque expedita quibusdam! Praesentium beatae reprehenderit, dolore consequuntur, voluptatum excepturi sapiente nulla repudiandae, natus vel atque. Unde culpa asperiores, ipsam dicta, impedit assumenda alias, vitae porro placeat exercitationem obcaecati numquam. Labore eligendi minima doloremque itaque placeat modi nobis odit commodi, asperiores maxime. Porro nostrum accusamus modi commodi voluptates repellendus amet adipisci nesciunt nihil atque architecto neque sapiente ea facere, explicabo delectus suscipit iste fugiat obcaecati maxime beatae aliquid quo. Laboriosam, neque in culpa quaerat a quasi doloremque dolorem illo. Nostrum sequi deleniti optio cupiditate vitae ipsa mollitia accusantium doloribus!</p>
    <button onClick={getUser}>Get User</button>
    <br />
    <br />
    {user.length>0 && (<Filters setUser={setUser} filteredData={filteredData} />)
    }
    <br />
    <br />
    {user.length >0 && (<Table user={user}/>)}
    </div>
    
  );
}

export default App;
