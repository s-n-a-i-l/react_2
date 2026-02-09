import './Hello.css';
import React from 'react';

class Hello extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
            invite:"Введите ваше имя",
            name : "",
            btnName: "Перевести"

        }
    }

    changeText=()=>
    {
        this.setState({invite: this.state.invite === "Input your Name" ?"Введите ваше имя" : "Input your Name"});
        this.setState({btnName: this.state.btnName === "Translate" ? "Перевести" : "Translate"});
    }
    inputName =() =>
    {

        this.setState({name: document.getElementById("name").value});
    }
    render()
    {
        return(
            <div>
                
                <input type='text' id='name' placeholder={this.state.invite} onChange={this.inputName}/>
                <button onClick={this.changeText}>{this.state.btnName}</button>
                <p>Hello!! {this.state.name}</p>
            </div>
        );
    }
}
export default Hello;