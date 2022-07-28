document.addEventListener('DOMContentLoaded', ()=> {
    class Burger {
        constructor(menuSel, navSel) {
            this.menu = document.querySelector(menuSel);
            this.nav = document.querySelector(navSel);
            this.menu.addEventListener('click', () => {
                this.menu.classList.toggle('active');
                this.nav.classList.toggle('active');
            });
        }
    }
    try {
        let introBurger = new Burger('.intro__burger', '.intro__inner-nav');
    } catch (e) {
    }
    try {
        let fProjectBurger = new Burger('.content__fProjects__burger', '.content__fProjects-header-nav');
    } catch (e) {
    }
    try {
        let blogsBurger = new Burger('.content__blogs__burger', '.content__blogs__header-nav');
    } catch (e) {
    }
    try {
        let footerBurger = new Burger('.footer__menu__burger', '.footer__menu-nav');
    } catch (e) {
    }
    
});