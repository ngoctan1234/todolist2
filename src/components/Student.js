import { FaBeer } from 'react-icons/fa';
import { AiFillDelete } from 'react-icons/ai';
import Edit from "./Edit"
function Student({value,delete_student,toggle_complete,toggle_edit,editId,editList}){
   const isEdit=value.id===editId
    return(
        <div className="student">
            {
            isEdit?
           
                 <Edit  value={value} editList={editList}/>
                 :
                 (
                    <>
            <input type="checkbox" checked={value.isComplete}
             onChange={()=>toggle_complete(value.id)}
            />
            <span 
           onDoubleClick={()=>toggle_edit(value.id)} 
            >{value.name}</span>
            
          
            <AiFillDelete onClick={()=>delete_student(value.id)} />
            </>
                 )
}
        </div>
    )
}
export default Student