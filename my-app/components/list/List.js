import Item from "../item/Item"
export default function List({arr}){
   const items= arr.map(item=><Item  key={item} text={item}/>

    )
    return (
        <ul>
        { items}
        </ul>
    )
}