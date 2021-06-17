import axios from 'axios'

const seriesUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'

const fetchSeries = async (setSeries, setError) => {
  try {
    let response = await axios.get(seriesUrl)
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    )
    setError(false)
  } catch (error) {
    setError(true)
  }
}

export { fetchSeries }
