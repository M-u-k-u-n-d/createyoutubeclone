import Button from "./Button";
const ButtonList = () => {
    const list = ["All","Music","Chess","Web Development","Cricket","Bhojpuri Songs","Bhajan","Virat Kohli","Tom and Jerry"];
    return ( 
    <div className="flex gap-3 mb-2 p-2">
        {
        list.map((val,index) => {
            return <Button key={index} name = {val}/>
        })
        }
    </div> );
}
 
export default ButtonList;