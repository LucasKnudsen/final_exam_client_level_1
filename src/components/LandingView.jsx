import React, { useEffect, useState } from 'react'
import { fetchSeries } from '../modules/viaplayServices'

const LandingView = () => {
  const [series, setSeries] = useState([])

  useEffect(() => {
    fetchSeries(setSeries)
  }, [])

  const listOfSeries = series.map((serie) => {
    return (
      <div data-cy='serie-card' className='display-show'>
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
      <div className='series-container'>{listOfSeries}</div>
      <div className='block' />
    </div>
  )
}

export default LandingView
