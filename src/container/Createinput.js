import React, { Component } from 'react';
import Forminput from '../component/Forminput'
import {Form,FormGroup,Label,Container,Button} from 'reactstrap';
class Createinput extends Component{
state={
    formObj:{
        FullName:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Enter Name'
            },
            value:'',
            validation:{
                required: true,
                minLength: 3,
                maxLength:5
            },
            valid:false
        },
        Email:{
            elementType:'input',
            elementConfig:{
                type:'email',
                placeholder:'Enter Email'
            },
            value:'',
            validation:{
                required: true
            },
            valid:false
        },
        Mobile:{
            elementType:'input',
            elementConfig:{
                type:'text',
                placeholder:'Enter Mobile Number'
            },
            value:'',
            validation:{
                required: true,
                maxLength: 10
            },
            valid:false
        },
        Address:{
            elementType:'textarea',
            elementConfig:{
                rows:'2',
                placeholder:'Enter Address'
            },
            value:'',
            validation:{
                required: true
            },
            valid:false
        },
        Gender:{
            elementType:'select',
            elementConfig:{
                option:[{
                    value:'Male',
                    label:'Male'
                },{
                    value:'Female',
                    label:'Female'
                }]
            },
        },
        Good:{
            elementType:'input',
            elementConfig:{
                type:'radio',
                name:'good'
            }
        }

    }
    
}

inputChangeHandler = (event,eventIdentifier) => {
     const updatedObj = {
         ...this.state.formObj
     }
     const updatedformObj = {
         ...updatedObj[eventIdentifier]
     }
     updatedformObj.value = event.target.value;
     updatedformObj.valid=this.checkValidity(updatedformObj.value,updatedformObj.validation);
    //  console.log(updatedformObj);
      updatedObj[eventIdentifier] = updatedformObj;
      this.setState({
        formObj:updatedObj
      })
    //   console.log(updatedObj);

}

checkValidity = (value, rules) => {
let isValid = true;
if(rules.required){
    isValid = value.trim() !== '' && isValid;
}
if(rules.maxLength){
    isValid = value.length <= rules.maxLength  && isValid;
}
if(rules.minLength){
    isValid = value.length >= rules.minLength  && isValid;
}
return isValid;
}

render(){
   const inputArray = [];
   for(let val in this.state.formObj){
    inputArray.push({
        id: val,
        config: this.state.formObj[val]
    })
    // console.log(inputArray);
   } 
return(
    <Container>
        <Form autoComplete="off">
            {
                inputArray.map((data,i) => 
               
        <FormGroup>
        <Label for="exampleEmail">{data.id}</Label>
       <Forminput elementType=
        
       {data.config.elementType} 
       elementConfig={data.config.elementConfig}
       value={data.config.value}
       invalid = {!data.config.valid}
       changed = {(event) => this.inputChangeHandler(event,data.id)}>

       </Forminput>
      
      </FormGroup>
     
       )
       
}  
<Button>Submit</Button>
        </Form>
    </Container>
)

 
}
}
export default Createinput;