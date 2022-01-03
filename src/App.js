import React, { useState, useEffect } from 'react'
import { Switch, Route } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { Nav } from './components/nav/Nav'
import { ChampionList } from './components/championList/ChampionList'
import { Champion } from './components/champion/Champion'

const App = () => {
  const [list, setList] = useState([])
  const [championFilter, setChampionFilter] = useState('')
  const [champion, setChampion] = useState('')
  const [individualChampion, setIndividualChampion] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      const result = await axios(
        'https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion.json'
      )
      let arr
      arr = Object.values(result.data.data)
      setList(arr)

      let result2 = null
      if (champion) {
        result2 = await axios(
          `https://ddragon.leagueoflegends.com/cdn/11.24.1/data/en_US/champion/${champion}.json`
        )
        let championInfo = Object.values(result2.data.data)
        setIndividualChampion(championInfo)
      }

      setIsLoading(false)
    }
    fetchData()
  }, [champion])

  const filteredList = list.filter((value) =>
    value.name.toLowerCase().includes(championFilter.toLowerCase())
  )

  const [individualInfo] = individualChampion

  return (
    <div className='App'>
      <Nav setChampionFilter={setChampionFilter} />
      <Switch>
        <Route
          path='/champion'
          render={() => {
            return <Champion champInfo={individualInfo} isLoading={isLoading} />
          }}
        />
        <Route
          exact
          path='/'
          render={() => (
            <ChampionList
              list={filteredList}
              setChampionFilter={setChampionFilter}
              setChampion={setChampion}
              isLoading={isLoading}
            />
          )}
        />
      </Switch>
    </div>
  )
}

export default App
