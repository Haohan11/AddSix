//題目 列舉四種方法將 array1 陣列內容變為[1,2,3,4,5,6]
const array1 = [1,2,3,4,5]
//開始作答

//第一種
array1.push(6);

//第二種
array1.splice(5,0,6);

//第三種
array1.reverse();
array1.unshift(6);
array1.reverse();

//第四種
const array2 = [6];
array1 = array1.concat(array2);



console.log(array1);