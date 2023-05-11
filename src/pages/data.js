
let list=[
    {
        id:1,
        name:"name 1"
    },
    {
        id:2,
        name:"name 2"
    },
    {
        id:3,
        name:"name 3"
    }
]
export function getInvoices(){
    return list;
}
export function getInvoiceById(id){
    return list.find(
        (item)=>item.id===id
    )
}