<b>Умови:</b>
1. Створіть клас <code style="background-color: #F0F0F0">URLParser</code> з конструктором, що приймає повний URL.  
2. Додайте геттери:  
   &bull; <code style="background-color: #F0F0F0">protocol</code> → повертає <code style="background-color: #F0F0F0">http:</code> або <code style="background-color: #F0F0F0">https:</code>  
   &bull; <code style="background-color: #F0F0F0">hostname</code> → повертає домен  
   &bull; <code style="background-color: #F0F0F0">path</code> → повертає шлях (<code style="background-color: #F0F0F0">/products/item</code>)  
   &bull; <code style="background-color: #F0F0F0">queryParams</code> → повертає об’єкт з query-параметрами (<code style="background-color: #F0F0F0">{ search: "book", page: "2" }</code>)