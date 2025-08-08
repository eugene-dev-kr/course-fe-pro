<b>Мета</b>: попрактикувати <code style="background-color: #F0F0F0">History API</code> і зберігання маршрутів.  
<b>Умови:</b>  
1. Створіть клас <code style="background-color: #F0F0F0">HistoryTracker</code>, який:  
&bull; Зберігає список відвіданих URL в масив.  
&bull; Має методи:  
&bull; <code style="background-color: #F0F0F0">push(url)</code> — додає запис через <code style="background-color: #F0F0F0">pushState</code> і зберігає його в історії.  
&bull; <code style="background-color: #F0F0F0">back()</code> — переходить на попередню сторінку через <code style="background-color: #F0F0F0">history.back().</code>
2. Додатково:
Використайте подію <code style="background-color: #F0F0F0">popstate</code> для логування історії переходів.