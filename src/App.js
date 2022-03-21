import {useState,useEffect} from 'react'
import './App.css';

import { ContactList } from './components/ContactList';
import { SearchFilter } from './components/SearchFilter';
import { Title } from './components/Title';
import {fetchUsers} from './components/helper/apiCall'
import { Spinner } from './components/Spinner';


const App=()=> {
  const [contacts, setContacts] =useState([])
  const [user, setUser]=useState([])
  const[loading,setloading]=useState([])


  useEffect(()=>{
    setloading(true)
   fetchUsers().then(data=>{
     setContacts(data.results)
    setUser(data.results)
    setloading(false)
  })
  },[])

  const handleOnGenderChange=(e)=>
  {
    setloading(true)
    const{value}=e.target
    const params =`results=20&gender=${value}`
    fetchUsers(params).then(data=> 
      {
        setContacts(data.results)
        setUser(data.results)
        setloading(false)
      })
    

  }

  const handleOnSerch=(e)=>
  {
    const {value}=e.target;
    //filter
    const filterArgs=user.filter((user)=>
    {
      const userName=(user.name.first+" "+user.name.last).toLocaleLowerCase()
      if(userName.includes(value.toLocaleLowerCase()))
      return true


    })
    setContacts(filterArgs)
  }



  return (
    <div className='wrapper'>
      <div className='container'>
      {/* title section */}
    <Title/>


      {/* search and filter section */}
     <SearchFilter handleOnGenderChange={handleOnGenderChange}
     handleOnSerch={handleOnSerch}/>
    {loading && <Spinner/>}
     


      {/* user count  */}
      <div className="row">
        <div className="col">{contacts.length} user found</div>
      </div>


      {/* contact list card */}
      <ContactList users={contacts}/>
      
          
    </div>
    </div>
    
    
    
  );
}

export default App;
