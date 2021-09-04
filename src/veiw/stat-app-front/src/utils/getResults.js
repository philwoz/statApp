import axios from "axios";
const config1 = require('../config.json');

export const getResults = async (i, setResults) => {
    const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/fixtures?league=${i}&season=${2021}&last=${10}`,

        headers: {
            'x-apisports-key': config1.api_key,
            'x-rapidapi-host': 'v3.football.api-sports.io'
        }
    }
    axios(config)
        .then((response) => {
            const resData = response.data;
            setResults(resData.response)
        })
        .catch(function (error) {
            console.log(error)
        })
}