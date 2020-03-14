import React from 'react'
import Navbar from '../components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from '../components/MovieList'

const  Index = (props) => {
    console.log(props.shows)
   return (
       <div>
            <Navbar/>
            <div className="container">
            <div className="row">
                <MovieList />
            </div>

            </div>
       </div>
   )
}

export default Index