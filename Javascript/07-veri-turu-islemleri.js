// ********** String Veri Turu Islemleri ********** 
// https://www.w3schools.com/jsref/jsref_obj_string.asp

let email = "kahilmehmetali@gmail.com"
let firstName = "mehmet"
let lastName = "kahil"

//string karakter sayisi -> length
console.log(email.length)

//Ilk karakteri bulmak -> [0]:
console.log(firstName[0])
console.log(firstName.charAt(0))

// buyuk harf / kucuk harf :
firstName = firstName.toUpperCase()
console.log(firstName)

firstName = firstName.toLocaleLowerCase()
console.log(firstName)

//String icinde istediğimiz bilgiyi aramak ve yerini bulmak ->search:
console.log(email.search("@"))
console.log( email[15] )

console.log(email.search('olmazan')) //-1

//belli bir yere kadar al -> slice :
let DOMAIN = email.slice( email.search("@") + 1 ) //(domain bilgisi)
console.log(DOMAIN) 

console.log(
    DOMAIN.slice( 0,DOMAIN.indexOf('.') ) //sadece gmail kısmini aldik
)

//bilgiyi degistir -> replace :
email = email.replace('gmail.com', 'kodluyoruz.org')
console.log(email)

//istedigim bilgi var mi ? -> includes :
console.log(email.includes('dsfkisgk')) //false
console.log(email.includes('@')) //true

//istedigim bilgiyle basladi mi ? bitti mi -> startsWidth , endWidth : 
console.log(
    email.endsWith('kodluyoruz.org') //true
)

console.log(
    email.startsWith('m') //false
)

//Ilk Harflerini Buyuk Yapmak 

let fullName = `
${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()}
${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}
`
console.log(fullName)

//
let url = "www.kodluyoruz.org";
let language = "Java";

//Soru 1: Yukarıdaki language değişkenin değerini JavaScript olarak değiştirin ve konsola yazdırın.
console.log(language.replace('Java','Javascript'))

//Soru 2: Yukarıdaki url değişkenini kullanarak "www" olmadan domain (kodluyoruz.org) adında yeni bir değişken oluşturun ve konsola yazdırın.

//console.log(url.slice(4))
console.log(url.indexOf("."));
//Önce indexOf kullanarak "noktanın" yerini öğrendik.
domain = url.slice(3+1)
//3+1 olması "noktadan" sonrasını al demek.
console.log(domain)