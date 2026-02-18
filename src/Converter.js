import './Converter.css';
import React from 'react';

class Converter extends React.Component
{
 constructor(props)
 {
     super(props);
 }

 state=
 {
    num:"",
    newNum:"",
    from:"10",
    to:"10"
 }
 handleChange = (event) => 
 {
  this.setState({[event.target.name]: event.target.value});
 }

convert = () => {
    const { num, from, to } = this.state;

    if (!num) {
        this.setState({ newNum: "Введите число" });
        return;
    }

    if (from === to) {
        this.setState({ newNum: num });
        return;
    }

    const decimal = parseInt(num, parseInt(from));//число парс в from(cистему), т.е 1100 в 2

    if (isNaN(decimal)) {
        this.setState({ newNum: "Некорректное число для выбранной системы" });
        return;
    }

    const result = decimal.toString(parseInt(to));

    this.setState({ newNum: result.toUpperCase() });
}

 render()
 {
    return(
        <form>
            
            <div><input name="num" value={this.state.num} onChange={this.handleChange} type='text' placeholder='Введите число в любой системе счисления'/></div>
            <label>Из какой системы счисления</label>
            <select name="from" value={this.state.from} onChange={this.handleChange}>
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="16">16</option>
            </select>
            <br></br>
            <label>В какую систему счисления</label>
            <select name="to" value={this.state.to} onChange={this.handleChange}>
                <option value="2">2</option>
                <option value="8">8</option>
                <option value="10">10</option>
                <option value="16">16</option>
            </select>
            <div><input id='button' type="button" value={"Перевести"}  onClick={this.convert}/></div>
            <p>{this.state.newNum}</p>
        </form>
    );
 }

}
export default Converter;