1. <b> <code style="background-color: #F0F0F0">Map:</code>Статистика обʼєктів за складними ключами</b>  
Реалізуйте функцію <code style="background-color: #F0F0F0">groupByCategory(items)</code>, яка приймає масив товарів, де кожен товар має складний обʼєкт як категорію, і групує товари по цих категоріях.  

2. <b> <code style="background-color: #F0F0F0">Set:</code>Виявлення унікальних обʼєктів без повторної обробки</b>  
Створіть функцію <code style="background-color: #F0F0F0">filterUniqueByReference(arr)</code>, яка повертає масив лише унікальних обʼєктів за посиланням.  

3. <b> <code style="background-color: #F0F0F0">WeakMap:</code>Привʼязка метаданих до обʼєктів без витоку памʼяті</b>  
Створіть <code style="background-color: #F0F0F0">createMetadataStorage()</code>, яка дозволяє "прикріпити" додаткову інформацію до будь-якого об’єкта <b>без зміни самого об'єкта</b>. Ці об’єкти можуть зникнути з памʼяті — і метаінформація теж автоматично зникне.  

4. <b> <code style="background-color: #F0F0F0">Map:</code>WeakSet: Відстеження вже оброблених об’єктів</b>  
Створіть клас <code style="background-color: #F0F0F0">ObjectTracker</code>, який дозволяє перевірити, чи вже певний обʼєкт був "помічений" або оброблений. Клас має методи:  

<code style="background-color: #F0F0F0">mark(obj)</code> — позначити обʼєкт як оброблений  
<code style="background-color: #F0F0F0">wasProcessed(obj)</code> → <code style="background-color: #F0F0F0">true | false</code> — чи обʼєкт уже був оброблений  