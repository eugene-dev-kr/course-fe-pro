Створи структуру з об’єктом та масивом, яка описує користувача і його друзів.  
✅ Що треба зробити:
1. Створи об’єкт user, який має такі властивості:  
&bull; <mark style="background-color: #E5E4E2">name</mark> — рядок (ім’я користувача)  
&bull; <mark style="background-color: #E5E4E2">age</mark> — число (вік)  
&bull; <mark style="background-color: #E5E4E2">isOnline</mark> — булеве значення (чи онлайн)  
&bull; <mark style="background-color: #E5E4E2">friends</mark> — масив з 3 імен друзів (рядки)  
&bull; <mark style="background-color: #E5E4E2">settings</mark> — вкладений об’єкт з полями:  
&bull; <mark style="background-color: #E5E4E2">theme</mark> — рядок ("light" або "dark")  
&bull; <mark style="background-color: #E5E4E2">notifications</mark> — булеве значення (чи увімкнено сповіщення)  

Створи окрему змінну <mark style="background-color: #E5E4E2">firstFriendName</mark>, яка отримає значення <b>першого друга</b> з масиву <mark style="background-color: lightgray">user.friends.</mark>  

Створи окрему змінну notificationsEnabled, яка отримає значення з <mark style="background-color: #E5E4E2">user.settings.notifications</mark>.  

<b>Виведи в консоль:</b>  
&bull; Ім’я користувача  
&bull; Кількість друзів (не через метод, просто <mark style="background-color: #E5E4E2">.length</mark>)  
&bull; Ім’я першого друга  
&bull; Яка тема увімкнена  
&bull; Чи ввімкнені сповіщення  