
import { Card, CardContent, FormControl, MenuItem, Select, InputLabel } from "@mui/material";
import React, { useEffect, useState } from "react";
// import { TopGraph } from 'react-chartjs-2';
import "./App.css";
import InfoBox from "./InfoBox";
import Map from "./Map";

import TopGraph from "./TopGraph"
import Table from "./Table";
import "leaflet/dist/leaflet.css";

function App() {
  const [countries, setCountires] = useState([]);
  const [Country, setCountry] = useState("Worldwide");
  const [countryInfo, setCountryInfo] = useState([]);
  const [tabledata, setTableData] = useState([]);
  const[mapCenter,setMapCenter]=useState({ lat: 34.80746, lng: -40.4796 });
  const[mapZoom,setMapZoom]=useState(1);
  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/countries').then((result) => {
      result.json().then((request) => {
        console.log(request);
        setCountires(request);
        setTableData(request);

        const sort = request.sort((a, b) => (a.cases > b.cases ? -1 : 1))
        console.log(sort)
      }
      )

    })
  }, [])

  useEffect(() => {
    fetch('https://disease.sh/v3/covid-19/all').then((response) => {
      response.json().then((data) => {
        console.log(data)
        setCountryInfo(data)
      })
    })
  }, [])
  const onCountryChange = async (event) => {
    const countryCode = event.target.value
    setCountry(countryCode);
    console.log("neeraj>>>>>>>>>>", countryCode)

    const url = countryCode === "Worldwide"
      ? 'https://disease.sh/v3/covid-19/all'
      : `https://disease.sh/v3/covid-19/countries/${countryCode}`



   await fetch(url).then((request) => {
      request.json().then((result) => {
         setCountryInfo(result)
         setCountry(countryCode)
        setMapCenter([result.countryInfo.lat , result.countryInfo.long]);
        setMapZoom(4);
        console.log(setMapCenter())
      })
    })
  }
  return (<>
    <div className="app">
      <div className="app__left">
        <div className="app__header">
          <h1>COVID-19 TRACKER</h1>
          <FormControl>

            <select className="Select"
              variant="outlined"
              value={Country}
              onChange={onCountryChange}>Worldwide
              <option value="Worldwide">Worldwide</option>
              {countries.map((items, index) => (<option className="Options" key={index}>{items.country}</option>))}
            </select>

          </FormControl>
        </div>
        <div className="app__status">
          <InfoBox className="Cases" title="Coronavirous  case" Case={countryInfo.todayCases} total={countryInfo.cases} />
          <InfoBox className="Recoverd" title="Recovered" Case={countryInfo.todayRecovered} total={countryInfo.recovered} />
          <InfoBox className="Death" title="Death " Case={countryInfo.todayDeaths} total={countryInfo.deaths} />
        </div>
        <Map center={mapCenter} zoom={mapZoom} />
      </div>


      <Card className="app__right">
        <CardContent>
          {/* table */}
          <h3>Live Cases by Country</h3>
          <Table countries={tabledata} />
          {/* graph */}
          <h3>Worldwide new Cases </h3>

          <TopGraph />
        </CardContent>
      </Card>

    </div>
  </>)
}
export default App;


// https://disease.sh/v3/covid-19/countries

// https://disease.sh/v3/covid-19/all



// historical data that use to show graph in bottom

// https://disease.sh/v3/covid-19/historical/all?lastdays=120