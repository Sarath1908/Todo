import React, {useState} from 'react';



function Form(props){
    const [name,setName] = useState('');
    const [task,setTask] = useState('');

    const changeName = (event) =>{
        setName(event.target.value);
    };
    const changeTask = (event) =>{
        setTask(event.target.value);
    }
    
    const transferValue = (event) =>{
        event.preventDefault();
        const val = {
            name,
            task,
        };
        props.func(val);
        clearState();
    };

    const clearState = () =>{
        setName(' ');
        setTask('');
    }

    const someDate = new Date();
    const numberOfDaysToAdd = 3;
    const date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd);
    const defaultValue = new Date(date).toISOString().split("T")[0];

    
    return(
        <>
            <br/>
            <div classname = "formcontainer">
                <label>Name: </label>
                <input 
                    type= "text" 
                    placeholder = " enter your name" 
                    value = {name}
                    onChange= {changeName}
                />
                <button className = "NextButton"
                    onClick={transferValue}> NEXT </button>
                
                
            </div>
            <br/>
            <div className ="taskcontainer">
                <label>Task: </label>
                <input 
                    type = "text" 
                    placeholder = "enter the task"
                    value = {task}
                    onChange = {changeTask}
                />
                <label> Time: </label>
                <input 
                    id="dateRequired"
                    type="date"
                    name="dateRequired"
                    defaultValue={defaultValue}
                />

            </div>
            <br/>
        
            <button className='addbutton'>
                Add Task
            </button>
                    

            
        </>
    )
}

export default Form;