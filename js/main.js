document.addEventListener('DOMContentLoaded', function () {
    const accordeons = () => {
        function bindAccordeon(accordeonSelector) {
            const accordeon = document.querySelector(accordeonSelector),
                accordeonButtons = accordeon.querySelectorAll('.accordeon__button'),
                accordeonContents = accordeon.querySelectorAll('.accordeon__content');

            accordeonButtons.forEach(itemButton => {
                itemButton.className = 'accordeon__button closed';
            });

            accordeonButtons.forEach(btn => {
                btn.addEventListener('click', toggleItems);
            });

            function toggleItems() {
                const thisPanel = this.nextElementSibling;
                const thisClass = this.className;
                accordeonButtons.forEach(itemButton => {
                    itemButton.className = 'accordeon__button closed';
                });
                accordeonContents.forEach(itemContent => {
                    itemContent.style.maxHeight = 0;
                });
                if (thisClass == 'accordeon__button closed') {
                    this.className = 'accordeon__button active';
                    thisPanel.style.maxHeight = thisPanel.scrollHeight + 'px';
                }
            }

        }
        bindAccordeon('.accordeon');
        bindAccordeon('.accordeon_1');
    }
    accordeons();
});