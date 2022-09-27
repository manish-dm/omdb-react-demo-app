import React from 'react'
import MovieCarousel from './carousel/CarouselList'
import SeriesCarousel from './carousel/CarouselList'
import "./Home.css"
import { useSelector } from 'react-redux'

const Home = () => {
  const moviesList = useSelector((state) => state.movie.moviesList);
  const showsList = useSelector((state) => state.movie.showsList);

  return (
    <div className='HomePageCss'>
        <MovieCarousel carouselType="Movies" movieData={moviesList}/>
        <SeriesCarousel carouselType="Shows" movieData={showsList}/>
    </div>
  )
}

export default Home