const func2 = (value) => {
    return value
}

console.log(func2("func2です！"));

// 引数が１つのときは、()が省略できる
const func2_1 = value => {
    return value;
};

const func3 = (vlue1, value2) => {
    return value1 + value2;
}

// {}だけでなくreturnも省略できる
const func4 = (num1, num2) => num1 + num2;

console.log(func4(1, 2))

const sum = (a, b) => a + b
const minus = (a, b) => a - b

const keisan = (a, b) => sum(a, b) * minus(a, b);


// const keisan2 = (a, b) => (a,b) => a + b * (a,b) => a-b;

console.log(keisan(8, 2))

// const func3 = (value1, value2) => {
//     return value1 + value2;
// }

const func5 = (val1, val2) => (
    {
        name: val1,
        age: val2
    }
)

console.log(func5("主田",24))

const a = 2;
// 分割代入
const [ b , c , d ] = [ 3 , 4 , 5 ];
console.log(b,c,d)

// オブジェクトの分割代入
const myProfile = {
    name: "主田",
    age: 24
}

const { age } = myProfile
// const name = myProfile.name
// const age = myProfile.age

const message = `私の名前はです。年齢は${age}です。`;
console.log(message);