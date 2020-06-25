//正規表達式
RegExp.prototype.test() //搜尋字串中是否有符合的部分，回傳 true/false。
RegExp.prototype.exec() //以陣列回傳字串中匹配到的部分，否則回傳 null。
String.prototype.match() //以陣列回傳字串中匹配到的部分，否則回傳 null。
String.prototype.replace() //尋找字串中匹配的部分，並取代之。
String.prototype.search() //尋找字串中是否有符合的部分，有的話回傳 index，否則回傳 -1。
String.prototype.split() //在字串根據匹配到的項目拆成陣列。

//設字串
var str2 = 'name: ccc, tel: 082-333333, email:ccckmit@gmail.com, url:https://misavo.com, age:51'

str2.match(/[0-9]+/) //搜尋0-9的範圍
str2.match(/\d+\-\d+/g) // 會顯示全部的電話

RegExp.prototype.test() //檢驗字串是否包含
RegExp.prototype.exec() //尋找並取出內容

//spilt
str.split(",") // 顯示所有資料
str.split(/,\s+/) // 將開頭的空白刪除str.split(/[:,]/)

//replace
str.replace('ccc', 'snoopy') //將字串中的ccc取代成snoopy 

https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions?fbclid=IwAR1lk4wRK0nydDL_wyGl_VTqGtAyWHMdNpgollqbNMLWqaeMGNJAHGeEYU8