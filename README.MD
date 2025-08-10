<b>Умови:</b>
1. Реалізуйте навігаційне меню (HTML) з 3 посиланнями: <code style="background-color: #F0F0F0">/home</code>, <code style="background-color: #F0F0F0">/about</code>, <code style="background-color: #F0F0F0">/contact</code>.  
2. Створіть клас <code style="background-color: #F0F0F0">Navigation</code>, який:  
   &bull; Відслідковує <code style="background-color: #F0F0F0">window.location.pathname</code>.  
   &bull; Додає CSS-клас <code style="background-color: #F0F0F0">"active"</code> до відповідного пункту меню.  
   &bull; Реагує на <code style="background-color: #F0F0F0">popstate</code> і вручну змінює URL при кліку (через <code style="background-color: #F0F0F0">pushState</code>).  