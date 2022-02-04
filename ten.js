/*===========================================================
তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

=============================================================*/
var number = [10, 40, 60, 70, 80, 100, 300, 432, 400];
var largest = 80;
for (i = 0; i < largest; i++) {
	if (number[i] > largest) {
		var largest = number[i]
	}

}
console.log(largest);












// var largest = 0;
// for (i = 0; i <= largest; i++) {
// 	if (array[i] > largest) {
// 		var largest = array[i];
// 	}
// }