import React from 'react'
import { Card } from './card/Card'

export const ContactList = ({users}) => 
{
  console.log(users)
   return ( <div className="row">
        
           {users.length ?
           (users.map((usr,i)=> <Card key={i} user={usr}/>))
            :
            (<h5>User Not Found</h5>)
             
            



          }
          </div>

      
      

  )
}
