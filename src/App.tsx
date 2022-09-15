import React, { useEffect, useState } from 'react'
import './App.css'
import { decodeHTMLEntities, formatUSD, toDateString } from './helpers'
import { Purchase } from './model'
import ellipses from './images/ellipsis.svg'
import CategoryBadge from './components/CategoryBadge'

const App: React.FC = () => {
  const [purchases, setPurchases] = useState<Purchase[]>()

  useEffect(() => {
    fetch('https://idme-interview.herokuapp.com/').then(async res =>
      await res.json()
    ).then((data) => {
      console.log(data)
      const mappedData = data.map((purchase: Purchase) => ({
        ...purchase,
        purchaseDate: new Date(purchase.purchaseDate)
      }))

      setPurchases(mappedData as Purchase[])
    }).catch(reason => {
      setPurchases([])
    })
  }, [])

  return (
    <div className="App">
      <header className="header">
        <h1>Purchases</h1>
      </header>
      <div id="purchase-container">
        <div className="header purchase-row">

            <div className="purchase-name">
              Name
            </div>
            <div className="purchase-location">
              Location
            </div>
            <div className="purchase-date">
              Purchase Date
            </div>
            <div className="purchase-category">
              Category
            </div>
            <div className="purchase-description">
              Description
            </div>
            <div className="purchase-price">
              Price
            </div>
            <div className="more-btn"></div>
            </div>

        {
          purchases?.map(purchase =>
            <div className="purchase-row" key={purchase.id}>
              <div className="purchase-name">
                <span className="purchase-name-text">{purchase.name}</span>
              </div>
              <div className="purchase-location">
                <img className="icon" src= {purchase.location} alt={`${purchase.name} logo`}/>
              </div>
              <div className="purchase-date">
                <span className="date-text">
                  {toDateString(purchase.purchaseDate)}
                </span>
              </div>
              <div className="purchase-category">
                <CategoryBadge category={purchase.category} />
              </div>
              <div className="purchase-description">
                {decodeHTMLEntities(purchase.description)}
              </div>
              <div className="purchase-price">
                {formatUSD(purchase.price)}
              </div>
              <div className="more-btn"><img src={ellipses} alt={'More'}/></div>
            </div>)
        }
        </div>
    </div>
  )
}

export default App
