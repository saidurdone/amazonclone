import React from 'react'
import Product from '../product/Product'
import "./Home.css"

function Home() {
    return (
        
        <div className="home">
            <div className="home__container">
            <img className="home__image" src="https://images-fe.ssl-images-amazon.com/images/G/09/Digital_Video/Ever/SVOD/Xsite/GW_DT_Hero_NP-All_Mul-EN_1500x600._CB430966605_.jpg" alt=""/>

        <div className="home__row">
             <Product
                    id = "12345" 
                    title="The hitachi oven Sharp RE-SS10-XW Superheated Steam Microwave Oven"
                    price={32.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/81rm7bxlWrL._AC_UL160_SR160,160_.jpg"
                    rating ={5}/>
              <Product 
                    id = "12346"
                    title="Sharp RE-SS10-XW Superheated Steam Microwave Oven, 2-Tier Cooking, 8.2 gal (31 L), White"
                    price={39.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/61Q03WxzxAL._AC_UL160_SR160,160_.jpgttps://images-fe.ssl-images-amazon.com/images/I/81rm7bxlWrL._AC_UL160_SR160,160_.jpg"
                    rating ={4}/>
           
        </div>
        <div className="home__row">
             <Product
                    id = "12347" 
                    title="The hitachi oven Sharp RE-SS10-XW Superheated Steam Microwave Oven"
                    price={32.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/61Q03WxzxAL._AC_SY240_.jpg"
                    rating ={5}/>
              <Product 
                    id = "12348"
                    title="Sharp RE-SS10-XW Superheated Steam Microwave Oven, 2-Tier Cooking, 8.2 gal (31 L), White"
                    price={39.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/81rm7bxlWrL._AC_SY240_.jpg"
                    rating ={4}/>
                                  <Product 
                    id = "12349"
                    title="Sharp RE-SS10-XW Superheated Steam Microwave Oven, 2-Tier Cooking, 8.2 gal (31 L), White"
                    price={39.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/51yeX0DFK9L._AC_SY240_.jpg"
                    rating ={5}/>
        </div>
        <div className="home__row">
            
            <Product 
                    id = "12349"
                    title="Sharp RE-SS10-XW Superheated Steam Microwave Oven, 2-Tier Cooking, 8.2 gal (31 L), White"
                    price={39.22} 
                    image="https://images-fe.ssl-images-amazon.com/images/I/61+VdkCqbHL._AC_SY240_.jpg"
                    rating ={5}/>
        </div>
        </div>
        
        </div>
    )
}

export default Home
