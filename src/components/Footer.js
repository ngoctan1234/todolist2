function Footer(props){
    const btnList=[
        {
            id:1,
            name:"All",
            handle_click:()=>props.checkAll()
        },
        {
            id:2,
            name:"Remove Checked",
            handle_click:()=>props.removeAll()
        },
        {
            id:3,
            name:"Filter checked",
            handle_click:()=>props.filterChecked()
        },
        {
            id:4,
            name:"Filter nochecked",
            handle_click:()=>props.filterNoChecked()
        }
    ]
    return(
        <div className="footer">
            {
                btnList.map((item,key)=>{
                    return <button key={key} onClick={item.handle_click}>{item.name}</button>
                })
            }
        </div>
    )
}
export default Footer;