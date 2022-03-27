import './App.css';
import axios from 'axios';
import React, {useState, useEffect} from 'react';
import Coin from './Coin';




function App() {

  //The state can now be used inside functional components that is made possible by the useState 
  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  //to access the api web location.
  //useEffect takes a function which can contain any kind of operation including side effects.
  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=cad&order=market_cap_desc&per_page=200&page=1&sparkline=false')

    //if data accessed without error then store data
    .then(res =>{
      setCoins(res.data)

      console.log(res.data)
    }).catch(error => console.log(error)) // to catch all errors related to accessing api data ,and show it in console.
  }, []);



  //if search box starts changing then search for data
  const handelChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );


  

  return (

    //create a block for searching data
    <div className="coin-app" >
    
  <nav>
      <ul>
        <div class="logo-image">
          <img src="coinboxbig-70.png" class="headerlogo" ></img>
          <p className='logoName'>CoinBox</p>
        </div>

        <div className="navOptopn">
          <li><button className='navButton'>Login</button></li>
          <li><button className='navButton'>second</button></li>
          <li><button className='navButton'>Third</button></li>
        </div>

        
      </ul>
  </nav>

    
      <div className='coin-search'>
          <h1 className='cointext'>Find Your currency</h1>
          <form>
            <input className='coininput' placeholder='Search your coin' type="text" onChange={handelChange}></input>
          </form>
      </div>


    <div className='stickinfo'>
      <div className="coinContainer">
        <div className="coinRow">
           <div className="coin">
             
                <h1 className='listName1'>Name</h1> 
                <h1 className='listName2'>symbol</h1>
                <h1 className='listName3'>Price</h1> 
                <h1 className='listName4' >Volume</h1>
                <h1 className='listName5'>Changes In 24h</h1> 
                <h1 className='listName6' >Mkt Cap</h1>
               
          </div>
        </div>
      </div>
    </div>


      {filteredCoins.map(coin => {
        return(
          <Coin key={coin.id} name={coin.name} image={coin.image} symbol={coin.symbol} marketcap={coin.market_cap} price={coin.current_price}
          priceChange={coin.price_change_percentage_24h} volume={coin.total_volume}/>
        );
      })}  

      <div className='footer'>
        <h3>© 2022 LaSalle College . All Rights Reserved.</h3>
      </div>
    </div>
  );
}
 
export default App;
