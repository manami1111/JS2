import { useState } from "react"

export const RestaurantMessage = (props) => {

    //CSSオブジェクト
    const restaurantTableStyle = {
        border: '1px solid black',
        margin: "10px",
        padding: "10px"
    }

    const [num, setNum] = useState(0);

    const onClickNiceButton = () => {
        setNum(num+1);
    }

    const[flag, setFlag] = useState(false);
    const onClickFlagButton = () => {
        setFlag(!flag);
        console.log(flag);
    }

    return (
        <div style={restaurantTableStyle}>
            <h2>{ props.restaurantName }</h2>
            <p>奈良市</p>
            <p>カレー</p>
            <button onClick={onClickNiceButton}>いいね</button>
            <button onClick={onClickFlagButton}>フラグ</button><p>{num}</p>
        </div>
    )
}


