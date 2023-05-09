import { useState ,useEffect} from "react"
function Sinhvien(){
    const [text,setText]=useState('')
    useEffect(()=>{
        console.log("mounted")
        document.title=text
    },[text])
    useEffect(()=>{
        const handle_scroll=()=>{
            if(window.scrollY>100){
                console.log(">100")
            }
            else{
                console.log("<100")
            }
        }
        window.addEventListener('scroll',handle_scroll)
        console.log("add")
        //clean up function
       return  ()=>{
        console.log("remove")
        window.removeEventListener('scroll',handle_scroll)
        }
    },[])
    return (
    <div>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
        {
            console.log("render")
        }
    </div>
    )
}
export default Sinhvien