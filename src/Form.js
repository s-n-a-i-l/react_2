import './Form.css';
import React from 'react';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
    }

    state=
    {
        lastName:"",
        firstName:"",
        eMail:""
    }

    update=(event)=>
    {
        this.setState({[event.target.name]: event.target.value});
    }

    approve =() =>
    {
        if(this.state.lastName === "" || this.state.firstName === ""|| this.state.eMail === "" )
        {
            document.getElementById("greeting").style.visibility = "hidden";
            document.getElementById("check").style.visibility = "visible";
        }
        else
        {
             document.getElementById("greeting").style.visibility = "visible";
             document.getElementById("check").style.visibility = "hidden";
        }
    }

    render()
    {
        const{lastName,firstName,eMail}= this.state;
        return(
            <>
            <form>
                <div><input value={lastName} name="lastName" placeholder='Фамилия' onChange={this.update}/></div>
                <div><input value={firstName} name="firstName" placeholder='Имя' onChange={this.update}/></div>
                <div><input value={eMail} name="eMail"  placeholder='eMail' onChange={this.update}/></div>
                <div><input type="button" value={"Подтвердить"}  onClick={this.approve}/></div>
            </form>
            <p id="greeting">
                Здравствуйте {lastName} {firstName}, поздравляем вас с регистрацией.
                 Надеемся {eMail} - ваша настоящая почта
                 </p>

             <p id="check" style={{visibility:"hidden"}}>
                Пожалуйста проверьте правильность заполнения.
                </p>    
            </>

        );
    }
}
export default Form;