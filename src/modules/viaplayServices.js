import axios from 'axios'

const seriesUrl = 'https://content.viaplay.se/pc-se/serier/samtliga'

const fetchSeries = async (setSeries) => {
  try {
    let response = await axios.get(seriesUrl)
    setSeries(
      response.data._embedded['viaplay:blocks'][0]._embedded['viaplay:products']
    )
  } catch (error) {
    console.log(error)
  }
}

export { fetchSeries }
