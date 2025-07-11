'use strict';

function createUserInterface() {


    const form = document.querySelector('[data-form]');

    const submitBtn = form.querySelector('[type="submit"]');
    submitBtn.setAttribute('disabled', 'disabled');
    submitBtn.disabled = true;

    const inputs = Array.from(form.querySelectorAll('input'));

    const contactList = document.querySelector('.list-group');

    function renderContacts() {
        contactList.innerHTML = '';

        const contacts = dataBase.getData();

        contacts.forEach((user) => {
            const li = document.createElement('li');
            li.className = 'list-group-item d-flex align-items-center justify-content-between';

            const userInfo = document.createElement('div');
            userInfo.className = 'text-black';
            userInfo.innerHTML = `
              <b>${user.firstName} ${user.lastName}</b><br>
              <small class="text-muted">${user.phone}</small>
            `;

            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'btn btn-danger btn-sm';
            deleteBtn.textContent = 'Delete';

            deleteBtn.addEventListener('click', () => {
                dataBase.deleteData({ id: user.id });
                renderContacts();
            });

            li.append(userInfo, deleteBtn);
            contactList.appendChild(li);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const {target} = e;

        // Get data from the form
        const data = inputs.reduce((acc, {name, value}) =>{
            acc[name] = value;
            return acc;
        }, {});


        target.reset()
        dataBase.setData(data)
        renderContacts();
    });

    const disabledHandler = (e) => {
        let isInputFilled = true;
        for(let i = 0; i < inputs.length; i++) {
            if(!inputs[i].value.trim().length) {
                isInputFilled = false;
                break;
            }
        }

        if(isInputFilled) {
            submitBtn.removeAttribute('disabled')
            submitBtn.disabled = false;
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
            submitBtn.disabled = true;
        }
    }
    form.addEventListener('input', disabledHandler)
}

createUserInterface()