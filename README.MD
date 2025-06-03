Створи програму, яка:
1. Отримує <b>введення від користувача</b> через <code style= "background-color: #f0f0f0">prompt</code> та <code style= "background-color: #f0f0f0">confirm</code>
2. Створює <b>об’єкт</b> <code style= "background-color: #f0f0f0">session</code>, що містить всю зібрану інформацію
3. Має вкладений об’єкт і масив
4. Використовує всі типи даних

<b>Кроки:</b>  

<b>Збір даних через браузер:</b>  
&bull; Запитай ім’я (<code style= "background-color: #f0f0f0">prompt</code>) → <code style= "background-color: #f0f0f0">string</code>  
&bull; Запитай вік → <code style= "background-color: #f0f0f0">number</code> (перетвори з рядка)  
&bull; Запитай, чи користувач хоче отримувати сповіщення (<code style= "background-color: #f0f0f0">confirm</code>) → <code style= "background-color: #f0f0f0">boolean</code>  
&bull; Створи фіктивний <code style= "background-color: #f0f0f0">userId</code> як <code style= "background-color: #f0f0f0">bigInt</code> (можеш просто записати вручну <code style= "background-color: #f0f0f0">1234567890123456789n</code>)  
&bull; Встанови поле <code style= "background-color: #f0f0f0">lastLogin</code> як <code style= "background-color: #f0f0f0">null</code>  
&bull; Створи поле <code style= "background-color: #f0f0f0">nickname</code>, але не задавай значення (залиш <code style= "background-color: #f0f0f0">undefined</code>)  
&bull; Додай масив <code style= "background-color: #f0f0f0">favoriteTech</code> із трьох технологій (будь-яких)  
&bull; Додай вкладений об’єкт <code style= "background-color: #f0f0f0">settings</code> з полями:  
&bull; <code style= "background-color: #f0f0f0">theme</code>: "dark" або "light"  
&bull; <code style= "background-color: #f0f0f0">autoLogin</code>: <code style= "background-color: #f0f0f0">false</code>  

<b>Створи об’єкт session, який міститиме всі ці дані.</b>

<b>Виведи:</b>  
&bull; <code style= "background-color: #f0f0f0">alert</code> з короткою інформацією: "Привіт, [ім’я]! Ваш ID: [userId]"  
&bull; У <code style= "background-color: #f0f0f0">console.log</code> — весь обʼєкт  
&bull; У <code style= "background-color: #f0f0f0">console.log</code> — тип кожного поля (через <code style= "background-color: #f0f0f0">typeof</code>)  