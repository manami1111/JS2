export const Restaurant = (props) => {

return (
    <>
    <div style={{color:'red'}}>{props.name}</div>
    <div>{props.place}</div>
    <div>{props.price}</div>
    <div>{props.genre}</div>
    </>
)

}