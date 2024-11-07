const numArr = [1,2,3,4,5];

const newNumArr = numArr.filter((num) =>{
    return num % 2 === 1;
});

console.log(newNumArr);

const nameArr = ["主田","先岡","後藤"];

nameArr.map((n, i, array) => console.log(`${i + 1}番目は${n}です。`, array));

const newNameArr = nameArr.map((name) => {
    if (name === "主田"){
        return name
    } else {
        return `${name}さん`;
    }
});

console.log(newNameArr);

const newNameArr1 = nameArr.map(name => name === "主田" ? name : `${name}さん`);
console.log(newNameArr1);

const val1 = 1 > 0 ? "trueです":"falseです";
console.log(val1);

const printFormattedNum = (num) => {
    const formattedNum = typeof num === "number" ? num.toLocaleString() : "数値を入力してください";
    console.log(formattedNum);
}

printFormattedNum(1300);
printFormattedNum("1300");

const checkSumOver100 = (num1, num2) => {
    return num1 + num2 > 100 ? "100を超えています!" : "許容範囲です";
}

console.log(checkSumOver100(50,40));
console.log(checkSumOver100(50,70));

console.log(true && false);
console.log(true || false);

const num = null;
// || は左がfalseなら右を返す
const fee = num || "金額が未定です"
console.log(fee)

const num2 = 100;
const fee2 = num2 && "何か設定されました"
console.log(fee2);
