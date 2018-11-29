import React from 'react';
import './style.css'

class ColorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorOne: '',
            colorTwo: '',
            error:''
            //validColor: true
            
        };
        this.ouputColor = this.ouputColor.bind(this);
        this.handleColorOneChange = this.handleColorOneChange.bind(this);
        this.handleColorTwoChange = this.handleColorTwoChange.bind(this);
       // this.validColor = this.validColor.bind(this);
    }

    

    ouputColor(event)
    {   event.preventDefault();
        console.log('Ответ от формы:' + this.state.colorOne + ", " + this.state.colorTwo);
        if((this.state.colorOne==='')&&(this.state.colorOne==='')){
            console.log('не корректно введенные данные'); 
            this.setState({
                error: "Не корректно введенные данные. Пожалуйста, проверьте поля для заполнения"
            })
        }
        else{
            this.props.updateColor(this.state.colorOne,  this.state.colorTwo)
            this.setState({
                colorOne: '',
                colorTwo: '',
                error:''})
        }


    }

    // validColor(event){
    //     var valid= true;
    //     var i=1;
    //     console.log("i= " + i)
    //     console.log("event.target.value.length = " + event.target.value.length)
    //     console.log("event.target.value.charAt(i) = " + event.target.value.charAt(i))
    //     for(event.target.value.charAt(i); event.target.value.charAt(i) <= event.target.value.length; i++) 
    //     {
    //         console.log("event.target.value.length = " + event.target.value.length)
    //         console.log("event.target.value.charAt(i) = " + event.target.value.charAt(i))
    //         console.log("i= " + i)
    //         if(
    //             event.target.value.charAt(i) === '1'||
    //             event.target.value.charAt(i) === '2'||
    //             event.target.value.charAt(i) === ''
    //             )
    //             valid= true
    //         else valid= false
    //         if (valid === false){
    //                 this.setState({
    //                 validColor: valid  
    //             })
    //         }
    //     }
    // }

    handleColorOneChange(event) {
        if(
            (event.target.value.length === 7)&&
            (event.target.value.charAt(0)==='#')
            ){
            console.log("Изменислся первый цвет: " + event.target.value);
            console.log("Длина 1-го цвета: " + event.target.value.length);
            this.setState({
                colorOne: event.target.value
            });
        }
        else console.log("Введено не коррекное значение");
    }

    handleColorTwoChange(event) {
       // this.validColor();
        if(
            (event.target.value.length === 7)&&
            (event.target.value.charAt(0)==='#')
            //&&(this.state.validColor === true)
            ){
                console.log("Изменислся второй цвет: " + event.target.value)
                console.log("Изменислся второй цвет: " + event.target.value);
                console.log("Длина 2-го цвета: " + event.target.value.length);
                this.setState({
                colorTwo: event.target.value,
            });
        }
       else console.log("Введено не коррекное значение");
    }

    render(){
        return(
            <div className="container">
                <form role="form" onSubmit={this.ouputColor}> 
                    <div className="form-group">
                        <label htmlFor="inColorOne">Top color: </label>
                        <input 
                            type="text"
                            className="form-control" 
                            id="inColorOne"
                            placeholder = "#ff0000" 
                            onChange={this.handleColorOneChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="InColorTwo">Down color: </label>
                        <input
                            type="text" 
                            className="form-control"
                            id="InColorTwo"
                            placeholder = "#00ffff" 
                            onChange={this.handleColorTwoChange}/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-success">GO</button>
                    </div>
                    <div className="form-group">
                        <p>{this.state.error}</p>
                    </div>
                </form>
            </div>
        );

    }
}

export default ColorForm;