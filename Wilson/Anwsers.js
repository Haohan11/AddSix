//題目 列舉三種或以上方法將 array1 陣列內容變為[1,2,3,4,5,6]
export default [
//第一種
array => {
	array.splice(5,0,6);
	return array;
},
//第二種
array => {
	array.reverse();
	array.unshift(6);
	array.reverse();
	return array;
},
//第三種
array => {
	array.concat([6]);
	return array;
}
];