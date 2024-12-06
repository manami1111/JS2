// App.jsx: 実際のアプリケーションの内容（UIやロジック）を定義するコンポーネント

import React, { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import ProductList from './ProductList';
import AddProduct from './Addproduct';
import UpdateProduct from './UpdateProduct';
import DeleteProduct from './DeleteProduct';
import './App.css';
import NearExpiryList from './NearExpiryList';
import ExportButtons from './ExportButtons';


const App = () => {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [name, setName] = useState('');
  // selectProductId →今選択している商品のIDをuseStateで状態を保存している
  // 初期値はnull

  return (
    <div className="app-container">
      <h1 className='app-title'>🗂️ツール管理アプリ</h1>

      {/* 商品追加フォーム */}
      <AddProduct /><br /><br />

      {/* 消費期限が近い商品を表示 */}
      <NearExpiryList />

      {/* 商品一覧 */}
      <ProductList setSelectedProductId={setSelectedProductId} />
      {/* ProductListコンポーネントにsetSelectProductIdを渡して、商品を選んだ時に商品IDをAppに渡す */}
      {/* <子コンポーネントの呼び出し 渡したい値 />
          <Title title="〇○○" /> 親コンポーネントApp.js
          <Text{this.props.title}</Text>子コンポーネントTitle.js
          親コンポーネントから渡された値がpropsに入る*/}

      <br />

      {/* 商品更新フォーム */}
      {selectedProductId && <UpdateProduct productId={selectedProductId} setName={setName} />}
      {/* $$→両方true
          selectedProductIdがnull(初期値)ならfalseになる 
          →nullの場合は<UpdateProduct />は表示されない*/}

      {/* 商品削除ボタン */}
      {selectedProductId && name && <DeleteProduct productId={selectedProductId} />}
      {/* $$→両方true
          selectedProductIdがnull(初期値)ならfalseになる 
          →nullの場合は<DeletedateProduct />は表示されない*/}

      {/* エクスポートボタンを表示 */}
      <ExportButtons />
    </div>
  );
};

export default App
