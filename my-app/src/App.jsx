import { useState, useEffect, memo } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { RestaurantMessage } from "./components/Restaurant";
import { CssModules } from "./components/CssModules";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";




export const App = memo(() => {

    console.log("Appレンダリング");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };

    // // numはボタンの数値を持つstate
    // // setNumはnumを更新するための関数
    // const [num, setNum] = useState(0);

    // const onClickButton = () => {
    //     setNum(num + 1);
    // }

    // // useEffectの中は他の処理のレンダリングの影響を受けない
    // useEffect(() => {
    //     let count = 0
    //     for (let i = 0; i < 1000; i++) {
    //         count = count + i
    //     }
    //     console.log(count)
    // }, []);

    return (
        <>
        <button onClick={onClickButton}>ボタン</button>
        <p>{num}</p>
        <Child1 />
        <Child4 />
            {/* <CssModules /> */}


            {/* {console.log("test")}
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage color="green">お元気ですか</ColoredMessage>
            <ColoredMessage color="cyan">
                <h2>元気です！</h2>
            </ColoredMessage>
            <p>元気です！</p> */}
            {/* <button onClick={onClickButton}>ボタン</button>

            <p>{num}</p> */}
            {/* 


            <RestaurantMessage restaurantName='OIL SLOPE' />
            <RestaurantMessage restaurantName='ワインと' />
            <RestaurantMessage restaurantName='せっちゃん' /> */}

        </>
    );



})