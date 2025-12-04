import './HeroImg2Style.css'
// import img5.jpg from /components/
import React, { Component } from 'react'

class HeroImg2 extends Component{

  render(){
    return (
    <div className='hero-img'>
        <div className="heading">
            <h1>{this.props.heading}</h1>
            <p>{this.props.text}</p>
            {/* <p>this is 2 pro project iinmportant</p> */}
        </div>
    </div>
  );
}

}


export default HeroImg2;