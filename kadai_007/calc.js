// 変数numに1~50までのランダムな整数を代入する
let num = Math.floor(Math.random() * 50) + 1;

// 変数numの値を出力する
console.log(num);

// 変数numが3の倍数かどうかを調べます
if (num % 3 === 0 ) {
  console.log("3の倍数です");
}
// 変数numが5の倍数かどうかを調べます
else if (num % 5 === 0 ) {
  console.log("5の倍数です");
}
//　変数numが3と5の倍数かどうかを調べます
else if (num % 3 === 0 && num % 5 === 0 ) {
  console.log("3と5の倍数です");
}
else {
  console.log(num);
}
