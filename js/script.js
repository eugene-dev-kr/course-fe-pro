'use strict';

const navItemsCollection = document.querySelectorAll('.nav-item');

class Navigation {

    constructor(items) {

        this.navItems = items;
        this.#updateNavActiveItem();

        this.navItems.forEach((item) => {
            item.addEventListener('click', (event) => {
                event.preventDefault();
                const attrItemHref = item.getAttribute('href');
                window.history.pushState({}, '', attrItemHref)
                this.#updateNavActiveItem();

            })
        })
        window.addEventListener('popstate', (event) => {
            this.#updateNavActiveItem();
        })
    }

    #updateNavActiveItem() {

        const currentPath = window.location.pathname;

        this.#removeActiveClassNavItem();

        this.navItems.forEach((item) => {
            const itemHref = item.getAttribute('href');

            const normalizedPath = currentPath === '/' ? '/home' : currentPath;

            if (itemHref === normalizedPath) {
                item.classList.add('active');
            }
        })
    }

    #removeActiveClassNavItem() {
        for (const item of this.navItems) {
            item.classList.remove('active');
        }
    }
}

const nav = new Navigation(navItemsCollection);

