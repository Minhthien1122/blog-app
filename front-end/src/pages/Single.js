import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNBKjYty3eumAafp5SeAG3AAYqQFZvI6KbqfUBtHZZrFj2HF1WQDU9wADtyrVU97ZVyoQ&usqp=CAU"/>
        <div className="user">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYB82HpimAOS-KYsbgW2o9Qtiver5T2YD8A&usqp=CAU"/>
          <div className="info">
            <span>ThienMinh</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
          <Link to={`/write?edit=2`}>
            <img src={Edit} alt='edit'/>
          </Link>
            <img src={Delete} alt='delete'/>
          </div>
        </div>
        <h1>Lorem ipsum dolor sit amet consectetur dip</h1>
        <p>saaaaaaaaaaaaaaaaaaaaaa</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single