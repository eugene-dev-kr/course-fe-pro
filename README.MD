ЗАДАЧА: Імітація подій через  <code style="background-color: #F0F0F0">setTimeout</code> із підпискою ( <code style="background-color: #F0F0F0">pub/sub</code>) — без Promises та async/await  
Мета: реалізувати найпростішу подійну шину (Event Bus) у браузері, яка вміє підписуватися на події, відписуватися та емісити події асинхронно через  <code style="background-color: #F0F0F0">setTimeout</code>.  

Обмеження:
&bull; Лише браузерний JavaScript.
&bull; Заборонено: Promises, <code style="background-color: #F0F0F0">async/await</code>, сторонні бібліотеки.
&bull; Дозволено: <code style="background-color: #F0F0F0">setTimeout</code>, DOM-події для ручної перевірки.

Інтерфейс, який потрібно реалізувати:  
&bull; <code style="background-color: #F0F0F0">on(topic: string, handler: (payload:any) => void): () => void</code> — підписка, повертає функцію відписки.  
&bull; <code style="background-color: #F0F0F0">emit(topic: string, payload?: any, delay = 0): void</code> — асинхронна емісія через setTimeout із вказаною затримкою.  
&bull; <code style="background-color: #F0F0F0">off(topic: string, handler: Function): void</code> — відписка.  