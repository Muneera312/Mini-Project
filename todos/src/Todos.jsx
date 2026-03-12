import { useEffect, useState } from "react";
import {Link} from "react-router-dom";
 
function Todos(){
    const [todos, setTodos]= useState([]) 
const [title, setTitle]=useState("");
const[showmodal, setShowModal]=useState(false);
const[selectedtodo, setSelectedTodo]=useState([])
 
function handleAdd(){
    let data=[...todos]
    let id= data[data.length-1]

    if(title !==""){
         data.push({
        id: id+1,
        title:title,
        completed:false
    })
     setTodos(data)
     setTitle('')
    }
}
 function handleDelete(index){
    let data=[...todos];

    data.splice(index,1)
    setTodos(data)
    console.log(data,'data in delete');
    


}
 function handleCheckbox(index){
       let data=[...todos];
       data[index].completed= !data[index].completed;
       setTodos(data)
    setShowModal(false)
    setSelectedTodo({})
}
function handleEdit(ele){
     console.log(ele,'ele');
     setShowModal(true)
     setSelectedTodo(ele)
}
function handleUpdatedtitle(event){
     let data= {...selectedtodo};
     data.title= event.target.value 
     setSelectedTodo(data)
}
 function handleSave(){
    let data=[...todos]
    let updateddata= data.filter((ele,index)=>ele.id ===selectedtodo.id? ele.title=selectedtodo.title:ele)
    setTodos(updateddata)
    setShowModal(false)
    setSelectedTodo({})
}
return(
    <div className="todo-container">
        <h1 className=" text-center">
            TODOS
            </h1>
        <div className=" d-flex justify-content-center align-items-center gap-2">
            <input type="text" value={title} onChange={()=>  setTitle(event.target.value)} placeholder="enter title"/>
            <button className="btn btn-primary" onClick={()=> handleAdd()}>Add</button>
        </div>
        {
            showmodal? (
                  <div className="modal d-block " tabIndex="-1">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title"> title update</h5>
        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
      </div>
      <div className="modal-body">
        Enter Todo title:
        <input type="text"onChange={()=>handleUpdatedtitle(event)} value={selectedtodo.title} placeholder="enter the updated title" />
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal"onClick={()=>setShowModal(false)}>Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>handleSave()}>Save changes</button>
      </div>
    </div>
  </div>
</div>
            ) : <></>
        }
       
        {
            todos.map((ele,index) =>
            (
                <div key={index} className="d-flex justify-content-center align-items-center gap-2 mt-2">
                    <input  type="checkbox" onChange={()=>handleCheckbox(index, ele)}  checked={ele.completed? "true": ""} />
            <div className={ele.completed? "text-decoration-line-through":""}>
                {ele.title}
                </div>
                <button className="btn btn-warning" onClick={()=> handleEdit(ele)}>Edit</button>
                <button className="btn btn-danger" onClick={()=> handleDelete(index)}>Delete</button>
                </div>
            )
            )
        }
    </div>
);
}

export default Todos;
