import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ComparePage } from './Components/ComparePage';
import { FixtureCard } from './Components/FixtureCard';
import { TopNav } from './Components/TopNav';

import axios from "axios";
import { ResultCard } from "./Components/ResultCard";

const config1 = require('./config.json');





function App() {
  const [data, setData] = React.useState(null);
  const [compare, setCompare] = React.useState(null);
  const [results, setResults] = React.useState(null);
  const [leagues, setLeagues] = React.useState(39);




  React.useEffect(() => {
    const getFixtures = (i) => {

      const config = {
        method: 'get',
        url: `https://v3.football.api-sports.io/fixtures?league=${i}&season=${2021}&next=${10}`,

        headers: {
          'x-apisports-key': config1.api_key,
          'x-rapidapi-host': 'v3.football.api-sports.io'
        }
      }
      axios(config)
        .then((response) => {
          const resData = response.data;
          setData(resData.response)


        })
        .catch(function (error) {

          console.log(error)
        })

    }
    getFixtures(leagues);
  }, [leagues]);


  const getResults = async (i) => {
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



  const getFixtId = async (id) => {
    const config = {
      method: 'get',
      url: `https://v3.football.api-sports.io/predictions?fixture=${id}`,

      headers: {
        'x-apisports-key': config1.api_key,
        'x-rapidapi-host': 'v3.football.api-sports.io'
      }
    }
    axios(config)
      .then((response) => {
        const resData = response.data;
        console.log(resData.response);
        setCompare(resData.response);
        
        // res.status(200).json({"message":"api-test working", "data": resData});
      })
      .catch(function (error) {
        // res.status(500).json({"message":"api-test not  working", "error": error});
        console.log(error);
      })
  }

  const backButton = () => {
    setCompare(null);

  }

  const getLeagues = (i) => {

    setLeagues(parseInt(i));
  }

  return (
    <div className="App">
      <header className="App-header">
        <TopNav changeFunc={getLeagues} leagues={leagues} clickFunc={getResults} />
      </header>
      <body className="body">
       
        <div>
          {compare ? compare.map((item, i) => {
            return <ComparePage item={item} key={i} clickFunc={backButton} />
          }
          ) : null}
        </div>
        <div>{data && !compare && !results? data.map((item, i) => {
          return <FixtureCard className="cards" item={item} key={i} clickFunction={getFixtId} />
        }) : <h1> </h1>}</div>
      </body>
      <div>
        {results ? results.map((item, i) => {
          return <ResultCard item={item} key={i} />
        }
        ) : null}
      </div>


    </div>
  );
}

export default App;
