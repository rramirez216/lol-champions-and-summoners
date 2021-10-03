import React from 'react'
import './champion.styles.css'
import { LoadingSpinner } from '../loadingSpinner/LoadingSpinner';

export const Champion = ({champInfo, isLoading}) => {
  if (!champInfo) return <LoadingSpinner />
  return (
    <div className = 'outer-wrapper flex-column'>
      {isLoading
      ? <LoadingSpinner />
      : <div className = 'champion-card'>
          <div className = 'champion-image-wrapper'>
            <img src = {`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champInfo.id}_0.jpg`} alt = {`${champInfo.name} ${champInfo.title}`} />
          </div>
          <h1>{champInfo.name}</h1>
          <h2>{champInfo.title}</h2>
          <p className = 'lore'>{champInfo.lore}</p>
          <div className = 'spells-list-wrapper'>
            <div className = 'spell flex-column'>
              <div className  = 'tooltip-text passive'>
                <h3>{champInfo.passive.name}</h3>
                <p>{champInfo.passive.description}</p>
              </div>
              <div className="spell-image-wrapper">
                <img src={`https://ddragon.leagueoflegends.com/cdn/11.18.1/img/passive/${champInfo.passive.image.full}`} alt="passive ability description" />
              </div>
              <p>Passive</p>
            </div>
            <div className="spell flex-column">
              <div className  = 'tooltip-text'>
                <h3>{champInfo.spells[0].name}</h3>
                <p>{champInfo.spells[0].description}</p>
              </div>
              <div className="spell-image-wrapper">
                <img src={`https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champInfo.spells[0].image.full}`} alt="Q spell description" />
              </div>
              <p>Q</p>
            </div>
            <div className="spell flex-column">
              <div className  = 'tooltip-text w-spell'>
                <h3>{champInfo.spells[1].name}</h3>
                <p>{champInfo.spells[1].description}</p>
              </div>
              <div className="spell-image-wrapper">
                <img src={`https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champInfo.spells[1].image.full}`} alt="W spell description" />
              </div>
              <p>W</p>
            </div>
            <div className="spell flex-column">
              <div className  = 'tooltip-text e-spell'>
                <h3>{champInfo.spells[2].name}</h3>
                <p>{champInfo.spells[2].description}</p>
              </div>
              <div className="spell-image-wrapper">
                <img src={`https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champInfo.spells[2].image.full}`} alt="E spell description" />
              </div>
              <p>E</p>
            </div>
            <div className="spell flex-column">
              <div className  = 'tooltip-text right'>
                <h3>{champInfo.spells[3].name}</h3>
                <p>{champInfo.spells[3].description}</p>
              </div>
              <div className="spell-image-wrapper">
                <img src={`https://ddragon.leagueoflegends.com/cdn/11.18.1/img/spell/${champInfo.spells[3].image.full}`} alt="R spell description" />
              </div>
              <p>R</p>
            </div>
          </div>
        </div>
      }
    </div>
  )
}
