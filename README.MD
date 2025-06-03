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