const Button = ({name}) => {
    return ( 
        <div>
            <button className="pt-1 pb-1 pl-3 pr-3 bg-neutral-900 text-white rounded-md mt-1 hover:bg-black text-sm">{name}</button>
        </div>
     );
}
 
export default Button;