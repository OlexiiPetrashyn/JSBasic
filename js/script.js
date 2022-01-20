console.group('TASK 1 - Создайте две переменные a и b. Выведите в консоль результ их умножения.');

  const a = 10 ,
        b = 20;

  console.log( a * b );

console.groupEnd();



console.group('TASK 2 - Создайте две переменные c и d. Выведите в консоль результат деления.');

  const c = 100,
        d = 5;

  console.log( c / d );

console.groupEnd();



console.group('TASK 3 - Создайте две переменные e и f. Выведите в консоль результат сложения.');

  const e = 20,
        f = c;

  console.log( e + f );

console.groupEnd();



console.group('TASK 4 - Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль');

  const someNumber = 11,
        someBoolean = true,
        someString  = "java script",
        someSecondString = "100";

  console.log(' Type of ' + someNumber + ' is: ' + typeof someNumber);

  console.log(' Type of ' + someBoolean + ' is: ' + typeof someBoolean);

  console.log(' Type of ' + someString + ' is: ' + typeof someString);

  console.log(' Type of ' +  someSecondString  + ' is: ' + typeof someSecondString);

console.groupEnd();



console.group('TASK 5 - Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --');

  let num = 1;

  s1 = 'num += 11';

  s2 = 'num -= 11';

  s3 = 'num *= 11';

  s4 = 'num /= 11';

  s5 = 'num++';

  s6 = 'num--';

  console.log(' Simplify of ' + 'num = num + 11 is: ' + s1);

  console.log(' Simplify of ' + 'num = num - 11 is: ' + s2);

  console.log(' Simplify of ' + 'num = num * 11 is: ' + s3);

  console.log(' Simplify of ' + 'num = num / 11 is: ' + s4);

  console.log(' Simplify of ' + 'num = num + 1 is: ' + s5);

  console.log(' Simplify of ' + 'num = num - 1 is: ' + s6);

console.groupEnd();



console.group('TASK 6 - PROMPT');

    console.group('TASK 6.1 - Запросить число у пользователя, возвести его в квадрат и вывести результат.');

        const squareNumber = prompt('Please enter the number calculate it in square:');

        if (!isNaN(squareNumber)){

                console.log(squareNumber ** 2);
        }
        else{

                alert('Entered symbol is not a number');
        }

    console.groupEnd();

    console.group('TASK 6.2 - Вывести среднее арифметическое двух чисел. Числа запрашивать у пользователя.');

        const numberOne = Number(prompt('Please enter the number one:'));

        const numberTwo = Number(prompt('Please enter the number two:'));

        if (!isNaN(numberOne || numberTwo)){

        const average = (numberOne + numberTwo) / 2;

        console.log(average);
        }
        else{

                alert('Some of entered symbols are not a number');
                
        }

    console.groupEnd();

    console.group('TASK 6.3 - Перевести число минут в секунды и вывести результат. Число минут запрашивать у пользователя.');

        const minutes = Number(prompt('Please enter the minutes:'));

        if (!isNaN(minutes)){

        console.log('You entered: ' + minutes * 60 + ' seconds');
        }
        else{

        alert('Entered symbol is not a minutes');

    }

    console.groupEnd();

    console.group('TASK 6.4 - Создайте переменную greeting со значением Hello, и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. Выведите сообщение с приветствием, например, Hello, Vasya!.');

        const greeting = 'Hello';

        const userName = prompt('Please enter the User Name:');

        alert(greeting + ', ' + userName + '!');

    console.groupEnd();    

console.groupEnd(); 



console.group('TASK 7 - CONDITIONS');

  console.group('TASK 7.1 - Спросить переменную у юзера. Если переменная равна числу 10, то выведите "Верно", иначе выведите "Неверно".');

        const numberTen = Number(prompt('Please enter 10'));

        if ((!isNaN(numberTen)) && (numberTen === 10)) {

            alert('Right!');
            }

            else{

        alert('Entered symbol is not a 10');

        }

  console.groupEnd();

  console.group('TASK 7.2 - Напишите две проверки. Если переменная test равна true, то выведите "Верно", иначе выведите "Неверно". Если переменная test не равна true, то выведите "Верно", иначе выведите "Неверно". ');

    let userTest = true;

    (userTest === true) ?

      console.log( userTest + ' is Right!' ) : console.log( userTest + ' is not Right!');

      userTest = false;

    (userTest !== true) ?

      console.log( userTest + ' is Right!' ) : console.log( userTest + ' is not Right!');          
    
  console.groupEnd();

  console.group('TASK 7.3 - Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн, а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер. ');

    const buyerReceipt = Number(prompt('Please enter your total receipt'));

    const rule3percents = 500;
    
    const rule5percents = 800;

    const bonus3percents = 3;
    
    const bonus5percents = 5;

    if (buyerReceipt > rule5percents) {

      alert('Congratulations! Your bonus is ' + bonus5percents + '% and your total reciept is: ' + ( buyerReceipt - (buyerReceipt /100 * bonus5percents) ) );

    } else if (buyerReceipt > rule3percents) {

        alert('Congratulations! Your bonus is ' + bonus3percents + '% and your total reciept is: ' + ( buyerReceipt - (buyerReceipt /100 * bonus3percents) ) );

    } else {

        alert('Unfortunately your reciept is not enough to getting bonuses');

    }
    
  console.groupEnd();  

console.groupEnd();



console.group('TASK 8 - STATEMENTS');

  console.group('TASK 8.1 Решить циклами while, for. - Вывод чисел от 25 до 0 (порядок уменьшения).');

    console.group('WHILE');

      let i = 25;

      while ( i >= 0 ){

        console.log( i) ;

        i--;
      }

    console.groupEnd();

    console.group('FOR');

      for ( let i = 25; i >= 0; i-- ){

        console.log( i );

      }

    console.groupEnd();    

  console.groupEnd();  

  console.group('TASK 8.2 Вывод чисел от 10 до 50, которые кратны 5.');

    console.group('WHILE');

      let j = 10;

      while ( j <= 50 ){

        if (j % 5 === 0){
      
          console.log( j ) ;
        
        }
      
        j++;

      }

    console.groupEnd();

    console.group('FOR');

      for ( let k = 10; k <= 50; k++ ){

        if (k % 5 === 0) {

          console.log( k );

        }

      }

    console.groupEnd();    

  console.groupEnd();  

  console.group('TASK 8.3  Найти сумму чисел в пределах от 1 до 100.');

    console.group('WHILE');

    let l = 1,
        m = 0;


        do {

          m = m + l;

          l++;

        } while ( l <= 100 );

        console.log( m ) ;

    console.groupEnd();

    console.group('FOR');

      let n = 1,
          o = 0;

      for(; n <= 100; n++) {

        o = o + n;

        if ( n === 100 ) {
        
          console.log(o);
        
        }

      }

    console.groupEnd();  

  console.groupEnd();  

console.groupEnd();    

console.group('TASK 9 - Таски на switch., case.');

    console.group('TASK 9.1  Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)');

        const yourDay = 'Your day is ',
        userDay = +prompt ( 'Please enter the number of the week day from 1 to 7, where 1 is Monday' );

        switch ( userDay ) {

                case 1: alert(yourDay + 'Monday');
                        break;

                case 2: alert(yourDay + 'Tuesday');
                        break;

                case 3: alert(yourDay + 'Wednesday');
                        break;

                case 4: alert(yourDay + 'Thursday');
                        break;

                case 5: alert(yourDay + 'Friday');
                        break;

                case 6: alert(yourDay + 'Saturday');
                        break;  
                        
                case 7: alert(yourDay + 'Sunday');
                        break;

                default: alert ('Wrong number');
                        break;

        }    

    console.groupEnd();  

    console.group('TASK 9.2  В переменной day лежит какое-то число из интервала от 1 до 31. Определите, в какую декаду месяца попадает это число (в первую, вторую или третью).');

        const   decadeFirst = 'First Decade number',
                decadeSecond = 'Second Decade number',
                decadeThird = 'Third Decade number',
                userDecadeDay = +prompt ( 'Please enter the number of the day from 1 to 31 to month decade calculation' );

        switch ( true ) {

                case userDecadeDay <= 10:

                        alert('This is ' + decadeFirst);
                        break;

                case ( userDecadeDay >= 11 ) && ( userDecadeDay <= 20 ):

                        alert('This is ' + decadeSecond);
                        break;
                        
                case ( userDecadeDay >= 21 ) && (userDecadeDay <= 31 ):

                        alert('This is ' + decadeThird);
                        break;

                default: alert ('You type the wrong number');
                        break;

        }    

    console.groupEnd();  

console.groupEnd(); 
