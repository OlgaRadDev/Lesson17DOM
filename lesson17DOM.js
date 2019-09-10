// Навигационное меню
// Вам нужно создать навигационное меню с помощью js.
// У вас есть пустой html, но подготовленные стили и в js вам нужно создать
// структуру данных и написать функции для их рендеринга в DOM.
//

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

const menuContent = [
    {
        innerText: 'Dropdown link',
        className: 'dropdownLink',
        innerItems: [
            {
                innerText: 'Action',
                className: 'innerItem'
            },
            {
                innerText: 'Another action',
                className: 'innerItem'
            },
            {
                innerText: 'Submenu',
                className: 'innerItem',
                innerItems: [
                    {
                        innerText: 'SubItem',
                        className: 'innerItem'
                    },
                    {
                        innerText: 'SubItem',
                        className: 'innerItem'
                    },
                    {
                        innerText: 'SubItem',
                        className: 'innerItem'
                    },
                    {
                        innerText: 'SubItem',
                        className: 'innerItem'
                    }
                ]
            },
            {
                innerText: 'Submenu2',
                className: 'innerItem'
            }

        ]


    },

];

const $navBox = document.createElement('nav');
$navBox.classList.add('container');
document.body.prepend($navBox);

const listBuild = (data, parentSelector) => {
    const $ul = document.createElement('ul');

    data.forEach(listItem => {
        const $li = document.createElement('li');
        $li.classList.add(listItem.className);
        $li.innerText = listItem.innerText;

        if (listItem.innerItems) {
            listBuild(listItem.innerItems, $li)
        }
        $ul.append($li);
    });
    parentSelector.append($ul);
};

listBuild(menuContent, $navBox);

container.append($navBox);
















