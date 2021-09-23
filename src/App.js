import React, { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom'
import axios from 'axios';
import './App.css';
import { Nav } from './components/nav/Nav'
import { ChampionList } from './components/championList/ChampionList'
import { Summoner } from './components/summoner/Summoner'
import { Champion } from './components/champion/Champion';

const App = () => {
  const [list, setList] = useState([])
  const [championFilter, setChampionFilter] = useState('')
  const [champion, setChampion] = useState('')
  const [individualChampion, setIndividualChampion] = useState([])

  useEffect(() => {
    const fetchChampionList = async () => {
    const result = await axios('http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion.json')

    let arr
    arr = Object.values(result.data.data)
    setList(arr)
  }

  const fetchChampion = async () => {
    const result = await axios(`http://ddragon.leagueoflegends.com/cdn/11.18.1/data/en_US/champion/${champion}.json`)

    let championInfo = Object.values(result.data.data)

    setIndividualChampion(championInfo)
  }
  fetchChampionList()
  fetchChampion()
}, [champion])

  const filteredList = list.filter(value => value.name.toLowerCase().includes(championFilter.toLowerCase()))

  const [ individualInfo ] = individualChampion
  
  return (
    <div className='App'>
      <Nav />
      <Switch>

        <Route path = '/champion' render = {() => <Champion champInfo = { individualInfo }
        />} />

        <Route path = '/summoners' render = {() => <Summoner />}/>

        <Route exact path='/' 
          render = {() => <ChampionList list = { filteredList } 
          setChampionFilter = { setChampionFilter }
          setChampion = { setChampion }
          />} 
        />

      </Switch>
    </div>
  );
}

export default App