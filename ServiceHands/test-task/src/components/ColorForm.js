import React from 'react';

class ColorForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            colorOne: '',
            colorTwo: '',
            error:''
            
        };
        this.ouputColor = this.ouputColor.bind(this);
        this.handleColorOneChange = this.handleColorOneChange.bind(this);
        this.handleColorTwoChange = this.handleColorTwoChange.bind(this);
    }

    

    ouputColor(event)
    {   event.preventDefault();
        if((this.state.colorOne==='')&&(this.state.colorOne==='')){
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


    handleColorOneChange(event) {
        if(
            (event.target.value.length === 7)&&
            (event.target.value.charAt(0)==='#')
            ){
            this.setState({
                colorOne: event.target.value
            });
        }
        else console.log("Введено не коррекное значение");
    }

    handleColorTwoChange(event) {
        if(
            (event.target.value.length === 7)&&
            (event.target.value.charAt(0)==='#')
            ){
                this.setState({
                colorTwo: event.target.value,
            });
        }
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