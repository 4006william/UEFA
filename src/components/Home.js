import React, { Component} from 'react'
import HomeSlides from '../components/Home-slides'

class Home extends Component {

    render(){
        return(
            <div className="home">
                
                <nav className="nav">
                    <button className="nav-btn">PLAYERS</button>
                    <button className="nav-btn">CLUBS</button>
                    <button className="nav-btn">LEAGUES</button>
                    <button className="nav-btn">TOURNAMENTS</button>
                </nav>
                
                <div className="home-body">
                    <div>
                        <HomeSlides />
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default Home