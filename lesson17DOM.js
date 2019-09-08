// Навигационное меню
// Вам нужно создать навигационное меню с помощью js.
// У вас есть пустой html, но подготовленные стили и в js вам нужно создать
// структуру данных и написать функции для их рендеринга в DOM.
//

const container = document.createElement('div');
container.classList.add('container');

// console.log(container);
document.body.append(container);


// const menu = document.createElement('ul');
// menu.classList.add('menu');
// document.querySelector('.container').append(menu);

const menuContent = [
    {
        text: 'Menu_1',
        className: 'menu__item'
    },
    {
        text: 'Menu_2',
        className: 'menu__item'
    },
    {
        text: 'Menu_3',
        className: 'menu__item'
    },
    {
        text: 'Menu_4',
        className: 'menu__item'
    }
];
const renderMenu = (arr, parrentSelector) => (
    arr.forEach(elementMenu => {
        const menu = document.createElement('ul');
        menu.classList.add('menu');
        document.querySelector('.container').append(menu);
        const menu__Item = document.createElement('li');
        menu__Item.classList.add(elementMenu.className);
        const link = document.createElement('a');
        link.innerText = elementMenu.text;
        menu__Item.append(link);
        document.querySelector(parrentSelector).append(menu__Item);
    })
);

renderMenu(menuContent, '.container');

const subMenuContent = [
    {
        text: 'Sub__Menu_1',
        className: 'sub__menu__item'
    },
    {
        text: 'Sub__Menu_2',
        className: 'sub__menu__item'
    },
    {
        text: 'Sub__Menu_3',
        className: 'sub__menu__item'
    },
    {
        text: 'Sub__Menu_4',
        className: 'sub__menu__item'
    }

];

const renderSubMenu = (arr, parrentSelector) => (
    arr.forEach(elementMenu => {
        const submenu = document.createElement('ul');
        submenu.classList.add('submenu');
        document.querySelector('.menu__item').append(submenu);
        const submenu__Item = document.createElement('li');
        submenu__Item.classList.add(elementMenu.className);
        const sublink = document.createElement('a');
        sublink.innerText = elementMenu.text;
        menu__Item.append(link);
        document.querySelector(parrentSelector).append(menu__Item);
    })
);

renderMenu(menuContent, '.container');







const subMenu = document.createElement('ul');
subMenu.classList.add('Sumenu');
document.querySelector('.container').append(menu);

renderMenu(menuContent, '.menu__item');

//
//
// const renderSubMenu = arr => (
//     arr.forEach(elementSubMenu => {
//         const SubMenu_Item = document.createElement('li');
//         menu__Item.classList.add('menu__item');
//         menu__Item.innerText = elementMenu.text;
//         document.querySelector('.menu').append(menu__Item);
//     })
// );














