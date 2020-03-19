import React from 'react'
import MovieDB from '../api/MovieDB'
import MovieItem from './MovieItem'

class MovieList extends React.Component{

    state = {
        movies: [],
        selectedMovie: null
    }
    async componentDidMount() {
        const response = await MovieDB.get('/discover/movie')

        console.log(response.data.results)
        this.setState({ movies: response.data.results })
    }

    onMovieSelect = (movie) => {
        console.log(movie)
        this.setState({ selectedMovie: movie})
    }
    renderList = () =>{
        if (!this.state.movies){
            return <div>Loading</div>
        }
      return (
          this.state.movies.map((movie, index)=>{
            return (

                    <MovieItem onMovieSelect={this.onMovieSelect} movies={movie} key={index} />

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