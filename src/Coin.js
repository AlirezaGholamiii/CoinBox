import React from 'react';
import  './Coin.css';

//declaring variable to use for inserting data into webpage
const Coin = ({name, image, price, volume, symbol,priceChange, marketcap}) => {
    return(
        //create a block to show all data related to a coin in one row
        <div className="coinContainer">
            <div className="coinRow">
                <div className="coin">
                    <img src={image} alt='crypto'></img>
                    <h1 >{name}</h1>
                    <p className="coinSymbol">{symbol}</p>
                    <div className="coinData">
                        <p className="coinPrice">${price.toLocaleString()}</p>
                        <p className="coinVolume">${volume.toLocaleString()}</p>

                        {priceChange < 0  ? (
                            <p className='coinPercent red'>{priceChange.toFixed(2)}%</p>
                        ): (
                            <p className='coinPrice green'>{priceChange.toFixed(2)}%</p>
                        )}

                        <p className='coinMarketcap'>${marketcap.toLocaleString()}</p>
                    </div>
                </div>
                <button className='btnBuy' ><span>Buy</span><br></br><span>sell</span></button>
            </div>
        </div>
    )
}

export default Coin;