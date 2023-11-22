/*

Массивы
Написать 2 функции:
- шифратор пароля - функция принимает пароль, разбивает по символам, меняет местами какие-то буквы по заданному алгоритму и возвращает строку.
- проверка пароля - принимает зашифрованный пароль и второй пароль. Воспроизводит алгоритм назад на зашифрованном пароле и возвращает true, если он совпадает со втором паролем и false, если нет.

crypto('password') -> ssapdorw 
check('ssapdorw, 'password') -> true 
check('ssapdorw', 'wrong') -> false

B git создать папку: 8-crypto

*/

function crypto(pass) {
  convert = pass.split("");
  if (convert.length <= 5) {
    console.log("Пароль должен состоять из 6 или более символов");
  }
  stage1 = convert.reverse();
  stage2 = stage1.splice(2, 3);
  stage3 = stage1.concat(stage2);
  convertString = stage3.join("");
  return console.log(convertString);
}

function check(cryptoPass, password) {
  convert = cryptoPass.split("");
  stage1 = convert.splice(-3);
  stage2 = convert.splice(0, 2);
  newCryptoPass = stage2.concat(stage1).concat(convert).reverse();
  convertString = newCryptoPass.join("");
  if (convertString === password) {
    return console.log(true);
  }
  return console.log(false);
}
crypto("passwsasdasdasdasdord");

check("dradsadsadsaswssapods", "passwsasdasdasdasdord");
