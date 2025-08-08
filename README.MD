Створи структуру з об’єктом та масивом, яка описує користувача і його друзів.  
✅ Що треба зробити:
1. Створи об’єкт user, який має такі властивості:  
&bull; <code style="background-color: #F0F0F0">name</code> — рядок (ім’я користувача)  
&bull; <code style="background-color: #F0F0F0">age</code> — число (вік)  
&bull; <code style="background-color: #F0F0F0">isOnline</code> — булеве значення (чи онлайн)  
&bull; <code style="background-color: #F0F0F0">friends</code> — масив з 3 імен друзів (рядки)  
&bull; <code style="background-color: #F0F0F0">settings</code> — вкладений об’єкт з полями:  
&bull; <code style="background-color: #F0F0F0">theme</code> — рядок ("light" або "dark")  
&bull; <code style="background-color: #F0F0F0">notifications</code> — булеве значення (чи увімкнено сповіщення)  

Створи окрему змінну <code style="background-color: #F0F0F0">firstFriendName</code>, яка отримає значення <b>першого друга</b> з масиву <code style="background-color: #F0F0F0">user.friends.</code>  

Створи окрему змінну notificationsEnabled, яка отримає значення з <code style="background-color: #F0F0F0">user.settings.notifications</code>.  

<b>Виведи в консоль:</b>  
&bull; Ім’я користувача  
&bull; Кількість друзів (не через метод, просто <code style="background-color: #F0F0F0">.length</code>)  
&bull; Ім’я першого друга  
&bull; Яка тема увімкнена  
&bull; Чи ввімкнені сповіщення  


<b>Мета</b>: попрактикувати <code style="background-color: #F0F0F0">History API</code> і зберігання маршрутів.  
<b>Умови:</b>  
1. Створіть клас <code style="background-color: #F0F0F0">HistoryTracker</code>, який:  
&bull; Зберігає список відвіданих URL в масив.  
&bull; Має методи:  
&bull; <code style="background-color: #F0F0F0">push(url)</code> — додає запис через <code style="background-color: #F0F0F0">pushState</code> і зберігає його в історії.  
&bull; <code style="background-color: #F0F0F0">back()</code> — переходить на попередню сторінку через <code style="background-color: #F0F0F0">history.back().</code>
2. Додатково:
Використайте подію <code style="background-color: #F0F0F0">popstate</code> для логування історії переходів.