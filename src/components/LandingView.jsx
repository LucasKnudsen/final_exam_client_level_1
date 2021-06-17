import React, { useEffect, useState } from 'react'
import { fetchSeries } from '../modules/viaplayServices'

const LandingView = () => {
  const [series, setSeries] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetchSeries(setSeries, setError)
  }, [])

  const listOfSeries = series.map((serie, index) => {
    return (
      <div data-cy='serie-card' className='display-show' key={index}>
        <img src={serie.content.images.landscape.url} alt={serie.publicPath} />
      </div>
    )
  })

  return (
    <div className='container'>
      <div className='block'>
        <img
          data-cy='logo'
          className='logo'
          alt='viaplay-logo'
          src='https://kundservice.viaplay.se/wp-content/themes/viaplaycs/assets/dist/images/viaplay_white.svg'
        />
      </div>

      <div className='series-container'>
        {error ? (
          <>
            <h4 data-cy='error-message'>
              Unfortunately we could not connect to Viaplay. Please use this
              opportunity to go out and play in the sun!
            </h4>
            <img
              src='https://www.yummymummyclub.ca/sites/default/files/styles/large/public/field/image/kids-playing-outside.jpg?itok=iElI8H0K'
              alt='go-play'
            />
          </>
        ) : (
          listOfSeries
        )}
      </div>
      <div className='block' />
    </div>
  )
}

export default LandingView
