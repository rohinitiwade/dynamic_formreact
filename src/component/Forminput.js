import React from 'react';
import classes from './Createinput.css';
const Forminput = (props) => {
    
console.log("prop",props.invalid);
var inputElement = '';
const classArray = ['form-group form-control'];
if(props.invalid){
    classArray.push(classes.Invalid);
}
switch(props.elementType){
    case ("input"):
        inputElement= <input {...props.elementConfig}
        onChange={props.changed}
        className = {classArray.join(' ')}
        />;
        break;
    case ("textarea"):
        inputElement= <textarea {...props.elementConfig}
        onChange={props.changed}  className = {classArray.join(' ')}></textarea>; 
        break;
    case ("select"):
        inputElement= <select  className = {classArray.join(' ')}>
            {
                props.elementConfig.option.map((data,i) =>
                <option key={i} value={data.value}> {data.label}</option>
                )
            }
        </select>;
        break;
    default:
        inputElement= <input {...props.elementConfig}  className = {classArray.join(' ')} onChange={props.changed}></input>

}
return(
<div className=" col" >{inputElement}</div>
)
}

export default Forminput;