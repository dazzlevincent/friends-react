import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'

const ViewFriends = () => {
    const[data,changeData]=useState([])
    const fetchData = () =>{
        axios.get("https://friendsapi-re5a.onrender.com/view").then(
        (response) => {
            changeData(response.data)
        }
    ).catch(
        (error)=>{
            console.log(error.message)
            alert(error.message)
        }
    ).finally()
        }
    
    useEffect(()=>{fetchData()},[])
  return (
    <div>
<NavBar/>
<div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-6">



                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">id</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">FriendName</th>
                                            <th scope="col">FriendNickName</th>
                                            <th scope="col">DescribeYoursFriend</th>
                                            <th scope="col">__v</th>
                                            
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {data.map(
                                        (value,index)=>{return   <tr>
                                            <th scope="row">{value.id}</th>
                                            <td>{value.name}</td>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                            <td>{value.__v}</td>
                                            
                                            
                                        </tr>}
                                       )}
                                       
                                    </tbody>
                                </table>





                            </div>
                        </div>

                    </div>
                </div>
            </div>




    </div>
  )
}

export default ViewFriends