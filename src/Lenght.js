import './Lenght.css';
import React from 'react';

class Lenght extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            lenght:100
        }
    }

    setLenght =()=>
    {
        document.getElementById("square").style.width = this.state.lenght;
        document.getElementById("square").style.height = this.state.lenght;

    }

    inc =() =>
    {
        this.setState({length: this.state.lenght +10});
        this.setLenght();
    }

    dec =() =>
    {
        this.setState({length: this.state.lenght - 10});
        this.setLenght();
    }
    reset=()=>
    {
        this.setState({length: 100});
        this.setLenght();
    }

    render()
    { 
        return(
            <div>
                <button onClick={this.inc}>Inc</button>
                <button onClick={this.dec}>Dec</button>
                <button onClick={this.reset}>Reset</button>
                //let style = width:{this.state.lenght}px, height:{this.state.lenght}px;
                <div id='square' style={{width:this.state.lenght, height:this.state.lenght}}>

                </div>
            </div>
        );
    }
   
}

export default Lenght;