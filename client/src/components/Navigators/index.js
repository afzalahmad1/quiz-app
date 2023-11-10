import React from 'react'
import "./styles.css"
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  return (
    <div className='navbar'>
        <NavLink to="/" ><h3>Take Quiz</h3></NavLink>
        <NavLink to="/admin" ><h3>Admin</h3></NavLink>
        {/* <NavLink to="/dashboard" ><h3>Dash</h3></NavLink> */}
    </div>
  )
}

const QuestionType = ({setType})=> {
    return(

        <div className="navigation-container">
          <div className='qtype-container'>
            <div className='qtype-link'>
          <h2>Select Question Type</h2>
            <NavLink to="/addquestion" onClick={()=> setType('single')}>Single Choice</NavLink>
            <NavLink to="/addquestion/multichoice" onClick={()=> setType('multiple')}>multiple Choice</NavLink>
            <NavLink to="/addquestion/freechoice" onClick={()=> setType('free')}>Free Choice</NavLink>
            <NavLink to="/addquestion/fillinblank" onClick={()=> setType('blank')}>Fill in the blank</NavLink>
            <NavLink to="/addquestion/sorting" onClick={()=> setType('sorting')}>Sorting</NavLink>
            </div>
            <Outlet />
        </div>
        </div>
    )
}


export {Header,QuestionType};