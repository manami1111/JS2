const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん！`);

sayHello("主田");
sayHello();

const myProfile = {
    age:24,
}

// const { name = "ゲスト" } = myProfile;

// const message = `こんにちは！${name}さん！`;

// console.log(message);


const arr1 = [1,2];
console.log(arr1);
console.log(...arr1); //スプレッド構文で配列がバラバラになる

const summaryFunc = (num1, num2) => console.log(num1 + num2);

summaryFunc(arr1[0],arr1[1]);
summaryFunc(arr1);
summaryFunc(...arr1);

const arr2 = [1,2,3,4,5];

const [num1,num2,...arr3] = arr2;

console.log(num1);
console.log(num2);
console.log(arr3);

// const arr4 = arr2.slice(0,2);
// const arr5 = arr2.slice(2,5);
// console.log(arr4);
// console.log(arr5);

const arr4 = [10,20];
const arr5 = [30,40];

const arr6 = [...arr4];
console.log(arr4);
console.log(arr6);

const arr7 = [...arr4,...arr5];
console.log(arr7);

const arr7_1 = arr4.concat(arr5);
console.log(arr7_1);

const arr7_2 = [...arr4,25,...arr5,45];
console.log(arr7_2);

arr4.push(25);
const arr7_3 = arr4.concat(arr5);
console.log(arr7_3);
console.log(arr4);


const obj4 = { val1: 10, val2: 20};
const obj5 = { val3: 30, val4: 40};

// スプレッド構文でコピー
const obj6 =  {...obj4};
// スプレッド構文で結合
const obj7 = {...obj4, ...obj5};

console.log(obj6);
console.log(obj7);

const arr8 = arr4;
console.log(arr4);
console.log(arr8);

arr8[0] = 100;
console.log('arr8を変更した');
console.log(arr4);
console.log(arr8);

const name = "nusida";
const age = 24;

const user = {
    name: name,
    age: age
}

console.log(user)

const nameArr = ["主田","先岡","後藤"];

const nameArr2_1 = [];
for (let i = 0; i<nameArr.length; i++){
    nameArr2_1.push(nameArr[i] + 'さん');
}
console.log(nameArr2_1);

// map関数はfor文の省略形
const nameArr2 = nameArr.map((name) => {
    return name + 'さん'
})
console.log(nameArr);
console.log(nameArr2);