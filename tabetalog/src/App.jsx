import { Restaurant } from "./components/Restaurant";
export const App = () => {

  const data = [
    {
      "id": 1,
      "name": "トラットリア・ダ・ルイジ",
      "place": "東京",
      "genre": "イタリアン",
      "price": 3500
    },
    {
      "id": 2,
      "name": "寿司屋一番",
      "place": "大阪",
      "genre": "和食",
      "price": 5000
    },
    {
      "id": 3,
      "name": "カフェ・ド・パリ",
      "place": "京都",
      "genre": "カフェ",
      "price": 1500
    },
    {
      "id": 4,
      "name": "ビストロ・アミ",
      "place": "名古屋",
      "genre": "フランス料理",
      "price": 4000
    },
    {
      "id": 5,
      "name": "メキシカン・タコス",
      "place": "福岡",
      "genre": "メキシコ料理",
      "price": 2500
    },
    {
      "id": 6,
      "name": "スパニッシュ・バー",
      "place": "横浜",
      "genre": "スペイン料理",
      "price": 3000
    },
    {
      "id": 7,
      "name": "グリル・ハウス",
      "place": "札幌",
      "genre": "アメリカ料理",
      "price": 4500
    },
    {
      "id": 8,
      "name": "中華料理屋・上海",
      "place": "神戸",
      "genre": "中華",
      "price": 2800
    },
    {
      "id": 9,
      "name": "インドカレー・バザール",
      "place": "沖縄",
      "genre": "インド料理",
      "price": 2000
    },
    {
      "id": 10,
      "name": "ベーカリー・サンローズ",
      "place": "広島",
      "genre": "パン屋",
      "price": 1000
    }
  ]


  const firstData = data[0];
  console.log(firstData);


  // 最初のデータを画面に出す
  return (
    // returnの中はタグを書くところ
    // {}の中は上と同じjsが書ける
    <>
      <Restaurant name={firstData.name} place={firstData.place} price={firstData.price} />
      {/* {data.map(
        (d) => <p>{d.name}</p>
      )} */}

      {data.map(
        (d) => <Restaurant key={d.id} name={d.name} place={d.place} price={d.price} genre={d.genre} />
      )}
    </>
  )


} 