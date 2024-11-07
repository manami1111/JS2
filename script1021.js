// オブジェクトを定義
const obj1 = {
    name:'主田',
    age:24,
}

console.log(obj1);

// プロパティの値を変更
obj1.name = 'Nushida';
console.log(obj1);

// プロパティを追加
obj1.adddres = 'Tokyo';
console.log(obj1);

// 配列の定義
const arr1 = ["dog","cat"];
console.log(arr1);

// 1つ目の値を変更
arr1[0] = "bird";
console.log(arr1);

// 値を追加
arr1.push("monkey");
console.log(arr1);

for (let i = 0; i < 10; i++){
    console.log(i);
}

const name = "主田";

const age = 24;

// const message = "私の名前は" + name + "です。年齢は" + age + "歳です。";
const message = `私の名前は${name}です。年齢は${age + 10}歳です`

console.log(message);

function func1(value){
    return value;
}

console.log(func1("func1です"));

function func2(value){
    console.log(value);
    // return null
}

// func2('func2です。');
console.log(func2("func2です"));

const func3 = function (value){
    return value;
}
console.log(func3('func3です'));

// アロー関数
const func4 = (value ) => {
    return value;
}
console.log(func4('func4です'));

























