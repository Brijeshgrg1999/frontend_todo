//handle backend api 

import axios from "axios" 



const baseUrl = "https://todoapp-simple.onrender.com" ; 
const getAllToDo = (setToDo)=>{
    axios.get( baseUrl)
    .then(({data}) =>{
        console.log("data : " , data ) ; 
        setToDo(data) ; 
    })
}
const addToDo = (text , setText , setToDo )=>{
        axios.post(`${baseUrl}/save` , {text})
        .then((data)=>{
            if(!text){
                alert("please insert some task ..");
            }
            console.log(data);
            setText("") ; 
            getAllToDo(setToDo) ;
        })

}

const updateToDo = (toDoId , text , setToDo , setText , setIsUpdateing )=>{
    axios.post(`${baseUrl}/update` , {_id : toDoId , text })
    .then((data)=>{
        setText("") ; 
        setIsUpdateing(false) ; 
        getAllToDo(setToDo) ; 
      
    }).catch((err)=>{
        console.log(err);
    })

}

const deleteToDo = (toDoId , setToDo)=>{
    axios.post(`${baseUrl}/delete` , {_id : toDoId  })
    .then((data)=>{
        getAllToDo(setToDo) ;
     
      
    }).catch((err)=>{
        console.log(err);
    })

}





export {getAllToDo , addToDo , updateToDo , deleteToDo} ;  