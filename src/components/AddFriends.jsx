import axios from 'axios'
import React, { useState } from 'react'
import NavBar from './NavBar'

const AddFriends = () => {
    const [data,setData]=useState(
        {
            
            "name": "",
            "friendName": "",
            "friendNickName":"",
            "DescribeYourFriend":""
               
        }
    )
    const inputHandler=(event)=>{
        setData({...data, [event.target.name]:event.target.value})
    }

    const readValue=()=>{
        console.log(data)
        axios.post("https://friendsapi-re5a.onrender.com/adddata",data).then(
           (response)=>{
            console.log(response.data)
        
            if(response.data.status=="success") {
                alert("Succesful")
            }
            else{
                alert("Error")
            }
        }
        )
        

    }
  return (
    <div>
        <NavBar/>
        <div className="container">
            <div className="row">
                <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                <div className="row">
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-control">Name:</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-control">FriendName:</label>
                    <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={inputHandler} />
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-control">FriendNickName:</label>
                    <input type="text" className="form-control" name='friendNickName' value={data.friendNickName} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-control">DescribeYourFriend</label>
                    <input type="text" className="form-control" name='DescribeYourFriend' value={data.DescribeYourFriend} onChange={inputHandler}/>
                    </div>
                    <div className="col col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <button className="btn btn-primary" onClick={readValue}>SUBMIT</button>
                    
                    </div>
                </div>
                </div>
            </div>
        </div>

        
        
        </div>
  )
}

export default AddFriends