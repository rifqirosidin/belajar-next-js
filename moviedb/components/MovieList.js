import React from 'react'
import MovieDB from '../api/MovieDB'
import MovieItem from './MovieItem'

class MovieList extends React.Component{

    state = {
        movies: []
    }
    async componentDidMount() {
        const response = await MovieDB.get('/discover/movie')

        console.log(response.data.results)
        this.setState({ movies: response.data.results })
    }

    renderList = () =>{
        if (!this.state.movies){
            return <div>Loading</div>
        }
      return (
          this.state.movies.map((movie, index)=>{
            return (

                    <MovieItem movies={movie} key={index}/>

            )


          })
      )
    }
    render(){
        return(
            <div>
                <h2>Daftar Movie</h2>
                <div className="row">
                    {this.renderList()}
                </div>


            </div>
        )
    }
}

export default MovieList