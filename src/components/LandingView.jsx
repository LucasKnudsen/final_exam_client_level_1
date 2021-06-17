import React, { useEffect, useState } from 'react'
import { fetchSeries } from '../modules/viaplayServices'

const LandingView = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchSeries(setSeries)
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
        {series[0] ? (
          listOfSeries
        ) : (
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
        )}
      </div>
      <div className='block' />
    </div>
  )
}

export default LandingView
