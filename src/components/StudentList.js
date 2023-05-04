import Student from "./Student"
import { useState } from "react"
import Add from "./Add"

import Footer from "./Footer"
const filter_list=(list,flag)=>{
   if(flag=="checkAll"){
      return list;
   }else if(flag=="filterNoChecked"){
       return list.filter(item=>!item.isComplete)
   }
   else if(flag=="filterChecked"){
        return list.filter(item=>item.isComplete)
    }
    else{
        return list;
    }
}
export default function StudentList(){
    const [flag,setFlag]=useState("checkAll")
    const [editId,setEditId]=useState('')
     const [list,setList]=useState([
        {
            id:1,
            name:"Lê Gia Bảo",
            isComplete:false,
            isEdit:false,
        },
        {
            id:2,
            name:"Hoàng Thiên Nam",
            isComplete:false,
            isEdit:false,
        },
        {
            id:3,
            name:"Hoàng Thiên Mèo",
            isComplete:true,
            isEdit:false,
        }
     ])
     const addList=(name)=>{
         setList([...list,{name:name,id:3,isComplete:false,isEdit:false}])
     }
   
     const delete_student=(id)=>{
        setList(list.filter((value)=>value.id!==id))
     }
     const toggle_complete =(id)=>{
         setList(list.map(value=>value.id ===id?{...value,isComplete:!value.isComplete}:value))
     }
     const toggle_edit =(id)=>{
        setEditId(id)
      
    }
     const editList =(id,name)=>{
        setList(list.map(value=>value.id ===id?{...value,name,isEdit:false}:value))
        setEditId('')
    }
    const checkAll=()=>{
        setFlag("checkAll")
    }
    const removeAll=()=>{
        setFlag("removeAll")
        const ds=list.filter(item=>!item.isComplete)
        setList(ds);
    }
    const filterChecked=()=>{
        setFlag("filterChecked")
    }
    const filterNoChecked=()=>{
        setFlag("filterNoChecked")
    }
    return (
        <div className="studentList">
            <Add addList={addList} />
            {
                filter_list(list,flag).map((value,index)=>
                 
                (

                     <Student 
                     key={index} 
                     toggle_complete={toggle_complete}
                     value={value} delete_student={delete_student}
                     toggle_edit={toggle_edit}
                     editList={editList}
                     editId={editId}
                     />
                ))
            }
          <Footer filterChecked={filterChecked}
                filterNoChecked={filterNoChecked}
                checkAll={checkAll}
                removeAll={removeAll}
          />
        </div>
    )
}