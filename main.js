document.addEventListener('DOMContentLoaded', function () {
    const accordeons = (accordeonSelector) => {
            const accordeon = document.querySelector(accordeonSelector), // селектор аккордеона
                accordeonHeader = accordeon.querySelectorAll('.accordeon__header'),
                accordeonContents = accordeon.querySelectorAll('.accordeon__content');

            accordeonHeader.forEach(itemButton => { // всем заголовкам изначально назначаем класс closed
                itemButton.className = 'accordeon__header closed';
            });

            accordeonHeader.forEach(btn => { // кликая по заголовкам, вызываем функцию toggleItems
                btn.addEventListener('click', toggleItems);
            });

            function toggleItems() {
                const thisPanel = this.nextElementSibling; // панель аккордеона, расположенная после кликнутого заголовка
                const thisClass = this.className; // класс кликнутого заголовка
                accordeonHeader.forEach(itemButton => { 
                    itemButton.className = 'accordeon__header closed'; // всем заголовкам назначаем класс closed
                });
                accordeonContents.forEach(itemContent => {
                    itemContent.style.maxHeight = 0; // всем панелям высоту ставим в ноль
                });
                if (thisClass == 'accordeon__header closed') { // если у кликнутого заголовка есть класс closed
                    this.className = 'accordeon__header active'; // то этому заголовку назначаем класс active
                    thisPanel.style.maxHeight = thisPanel.scrollHeight + 'px'; // и разворачиваем соответствующую панель
                }
            }
    }
    // вызываем аккордеон(ы) по нужному селектору
    accordeons('.accordeon');
    accordeons('.accordeon_1');
});