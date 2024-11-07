// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';


// export const Weather = (props) => {

//   // APIから取得したデータを保存する変数weather
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // useEffect(実行したい関数,依存配列)
//   // 依存配列の値が変化したとき、関数を実行する
//   // 依存配列が[]空のとき
//   useEffect(() => {
//     fetchWeather();
//   }, []);

//   // APIにあくえう
//   const fetchWeather = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       // try-catch-finallyで外部への通信が失敗したときに備える
//       // 130000は東京のエリアコード
//       const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${ props.areaCode }.json`;


//       const response = await axios.get(url);
//       // dataの収納 weatherにデータが入る
//       console.log(response.data)
//       setWeather(response.data);
//       console.log(weather)
//     } catch (err) {
//       setError('データの取得に失敗しました。');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleSearch = () => {
//     fetchWeather();
//   };

//   return (

      
//       <Button variant="contained" color="primary" onClick={handleSearch}>
//         検索
//       </Button>

//       {loading && <CircularProgress style={{ marginTop: '1rem' }} />}
//       {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}

//       {weather && (
//         <Card style={{ marginTop: '2rem' }}>
//           <CardContent>
//             <Typography variant="h5">{weather.targetArea}</Typography>
//             <Typography variant="body1">今日の天気: {weather.text}</Typography>
//           </CardContent>
//         </Card>
//       )}
//   )
// };


import { useState, useEffect } from 'react';
import axios from 'axios';
import {  Typography, Button, CircularProgress, Card, CardContent } from '@mui/material';

export const Weather = (props) => {
    // APIから取得したデータを保存する変数weather
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // useEffect(実行したい関数,依存配列)
    // 依存配列の値が変化したとき、関数を実行する
    // 依存配列が[]空のとき、初回のロード時のみ実行
    useEffect(() => {
        fetchWeather();
    }, []);

    // APIにアクセスしてデータを取得する関数
    const fetchWeather = async () => {
        setLoading(true);
        setError(null);

        // try-catch-finallyで外部への通信が失敗したときに備える
        try {
            // 130000は東京のエリアコード
            const url = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${props.areaCode}.json`

            const response = await axios.get(url);
            // dataの収納 weatherにデータが入る
            console.log(response.data);
            setWeather(response.data);


        } catch (err) {
            setError('データの取得に失敗しました。');
        } finally {
            setLoading(false);
        }
    };

    // ボタンをクリックしたら検索
    const handleSearch = () => {
        fetchWeather();
    };

    return (
        <>
            <Button variant="contained" color="primary" onClick={handleSearch}>
                検索
            </Button>

            {/* P65   A && <B /> 左側の値が存在すれば(true判定ならば、truthy)、右側のコンポーネントを表示 */}
            {loading && <CircularProgress style={{ marginTop: '1rem' }} />}
            {error && <Typography color="error" style={{ marginTop: '1rem' }}>{error}</Typography>}

            {weather && (
                <Card style={{ marginTop: '2rem' }}>
                    <CardContent>
                        <Typography variant="h5">{weather.targetArea}</Typography>
                        <Typography variant="body1">今日の天気: {weather.text}</Typography>
                    </CardContent>
                </Card>
            )}
        </>
    );
}