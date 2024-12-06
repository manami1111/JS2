import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export const App = () => {

  let str: string = 'A';

  str = 'B';
  str = 10;

  let num: number = 0; //プリミティブ型
  // let num2: Number = 1; //インターフェース
  num = '10';

  let bool : boolean = true;
  bool = 10;

  // Array<>で配列の中に入る型まで指定
  // <>をジェネリクスという
  const arr1 : Array<number> = [];
  // 型に[]を付けてもよい
  const arr2 : number[] =[0,1,2];

  arr1.push(10);
  arr1.push('str');

  let null1 : null = null;
  null1 = 10;

  let undefined1 : undefined = undefined;
  undefined1 = 10;

  let any1 : any;
  any1 = 10;
  any1 = 'str';

  const funcA = (num: number): void => {
    console.log(num);
  }

  const sum = (a:number, b:number) : number => a + b;

  const obj: { str: string, num: number } = {
    str:"A",
    num: 10,
  };

  // 型＆型で指定
  const obj1: { str: string } & { num: number } = {
    str: "A",
    num: 10
  }

  type TypeA = {
    str: string;
    num: number;
  }

  type TypeB = {
    str: string;
    bool: boolean;
  }

  type TypeC = TypeA & TypeB;

  const obj2: TypeC = {
    str: "A",
    num: 10,
    bool: false
  }

  // union型（OR）
  let val1: string | number = '';
  val1 = "A";
  val1 = 10;
  val1 = true;

  // nullを許可する変数
  // 特に非同期処理でデータを取得する変数は、読み込み時にはnullのはずなので
  // union型で定義する
  const data : string | null = 'test';
  const data2 : string | undefined = undefined;

  // ジェネリクス 後から型を決定する
  type CustomType<T> = {
    val: T;
  }

  // ジェネリクスで定義した型を使う
  const strObj: CustomType<string> = {val: "A"}

  // useState()でジェネリクスを使う
  const [str, setStr] = useState<string>('');





  return (
    <>
    <p>初めてのTypeScript</p>
    </>
  )
} 