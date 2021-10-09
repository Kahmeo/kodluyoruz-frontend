// ********** Coklu Kosullarla Calismak **********

let username = prompt("Kullanıcı Adiniz:")
let age = prompt("Yaşınız:")
let info = document.querySelector("#info")

if(username && age >= 18){
    info.innerHTML = "ehliyet alabilirsiniz"
}else if(!username){
    info.innerHTML = "Kullanıcı Adınız Yok"
}else if( !(age>=18) ){
    info.innerHTML = "Yaş Bilginiz Yok veya 18 yaşından küçüksünüz"
}
