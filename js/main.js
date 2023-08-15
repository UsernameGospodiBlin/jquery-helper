$(document).ready(function(){
//здесь пишем код

});
$(function(){
//второй варик
//var tagP = $('.mainText p').text('Новый текст для тега р');
//методы hide show text для работы с текстом.
/*цепные функции
$('.mainText p').hide(2000).show(2000);
в случае с переменной можно вызвать в виде:
var tagP = $('.mainText p').text
tagP.hide(2000)
*/ 
/* автоматические циклы

$('.icons > div').hide(3000); //спрятать 3с
хранятся ввиде [div,div,div,div]
*/
/*
изменение ширины и высоты элементов 
width и height
var w =$('.btn').width();
alert (w); //вывод ширины элемента
изменение ширины и высоты: в скобки указать значения.
function widthAndHeight(element){
   var className ="."+element;
   var w = $(className).width(); //смена ширины элемента
   $(".maintText p").text('Ширина:'+w+'; Высота: '+h);
   widthAndHeight('btn'); //бтн передается в элемент и происходит вывод ширины с возможностью её смены
}
*/
/*
изменение кода. тег html

$('.mainText').html('<b> Новый заголовок </b>');

*/
/* анимации появления и исчезновения fadeOut() и fadeIn() 
$('.mainText').fadeOut(2000).fadeIn(3000) // анимация плавного скрывания и появления элемента за время
функция  общая:
$(function(){
   function elementOut(element,time){
      if(time>5000||time<1000||isNaN(time)){ //isNaN проверка на число
         return false;
      } else{
         var className ='.'+element;
         $(className).fadeOut(time);
      }
   }
   elementOut('mainText,2000')
})
*/
/* Прозрачность элемента fadeTo()
$('.mainText').fadeTo(4000, 0.5); //второе значение в скобках процент прозрачности
//чтобы вернуть обратно прозрачность - пишем то же самое но с цифрой 1
*/
/*скрытие элементов слайд ом slideUp и slideDown
*/
/*
добавление и удаление атрибутов attr() и removeAttr()
var src = $('.logo img').attr('title', 'Подсказка','src','img/icon1.png');
//removeAttr -- удаление атрибутов.
универсальная функция:
$(function(){
   function changeAttr(element, newAttr,newValue){
      var className = "."+element;
      $(className).attr(newAttr, newValue)
   }
   changeAttr('logo','title','какой-то текст');
})
*/
/* 
добавление и удаление классов addClass()
$(function(){
   $( 'nav menu').addClass('border');
   //удалить класс removeClass('border');
})

*/
/*добавление свойств ксс и тд
$(function(){
   $( 'nav menu li a').css('color', 'red'(цвет любым вариантом);
   в виде объекта:
   $( 'nav menu li a').css({
      'color'
      padding итд
   })
   */
/*Анимация стилей animate() не работает на цвет. 
$(function(){
    $( 'nav menu li a').animate({
      'color'
      padding итд
   },3000)
}

*/
/* добавление html через jquery. 4 метода
$(function(){
   $('.mainText').before('<span>Новый блок </span>)
});
//варианты: before, after, append(в конце блока), prepend(в начале блока)
*/
/*
ручные циклы each() $(this)
$(function(){
   $('.icons img').each(function(){
      if($(this).attr('src')=='img/icon3.png'){
         $(this).fadeOut(1000);
      }) //проверка каждого элемента и исчезновение элемента соотв атрибуту
   });
});

*/

/* length количество элементов на сайте. */
/*
клонирование объекта. методы clone и remove
$(function(){
  var mainText =  $('.mainText').clone()
  $('body').append(mainText)
});

*/
/*выбор разных элементов по атрибуту 
$(function(){
   $('.mainText,a').css (ставить запятую после основного элемента)
});

*/
/* события jQuery (клики, нажатия, движение мышью и тд)
mouseover( function(){
   функция
})
mouseout()
click
mousemove
mouseup 
submit нажатие кнопки
focus  инпут получает фокус
blur  расфокус
change смена поля
reset сброс формы с кнопки ресет
keypress
keydown
keyup(отпускать кнопку)
load (загрузка всех файло)
resize проверка смены окна
scroll скролл
hover  наведение мышки 

*/

/*eventOnject обработчик события
$(function(){
   $('.mainText,a').click(function(e){
      alert(e.ScreenX+''+e.ScreeenY)
      pageX pageY вывод координат
      altKey проверка на нажитие альт
      ctrlKey
      shiftKey
      target
   })
});

*/
/*
отмена обычных поведений элементов
$(function(){
   $('.mainText,a').click(function(e){
     e.preventDefault()
     //return false второй варик

     $('.btn, .arrowDown').click(function(e){
      var answer = confirm ('Вы хотите отправить данные?');
      if(!answer){
         e.prevenrDefualt();
      }
     })
   })
});

*/
/*


*/
});