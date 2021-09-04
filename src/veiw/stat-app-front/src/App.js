import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { ComparePage } from './Components/ComparePage';
import { FixtureCard } from './Components/FixtureCard';
import { TopNav } from './Components/TopNav';

import axios from "axios";
import { ResultCard } from "./Components/ResultCard";
import { getFixtures } from "./utils/getFixtures";
import { getResults } from "./utils/getResults";

const config1 = require('./config.json');


function App() {
  const [data, setData] = React.useState(null);
  const [compare, setCompare] = React.useState(null);
  const [results, setResults] = React.useState(null);
  const [leagues, setLeagues] = React.useState(39);

  React.useEffect(() => {
    getFixtures(leagues, setData, setResults);
  }, [leagues]);


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
      })
      .catch(function (error) {
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
        <TopNav changeFunc={getLeagues} leagues={leagues} clickFunc={getResults} setResults={setResults} clickFunc2={getFixtures} setData={setData}/>
      </header>
      <body className="body">

        <div>
          {compare ? compare.map((item, i) => {
            return <ComparePage item={item} key={i} clickFunc={backButton} />
          }
          ) : null}
        </div>
        <div>{data && !compare && !results ? data.map((item, i) => {
          return <FixtureCard className="cards" item={item} key={i} clickFunction={getFixtId} />
        }) : <h1> </h1>}</div>
      </body>
      <div>
        {results ? results.map((item, i) => {
          return <ResultCard item={item} key={i} />
        }) : null}
      </div>
    </div>
  );
}


// { results ? return <ResultPage results={results} setResults={setResults} /> : null }
// const ResultPage = (props) => {
//   <div>
//     {props.results ? props.results.map((item, i) => {
//       return <ResultCard item={item} key={i} />
//     }) : null}

//   </div>
// }

export default App;
