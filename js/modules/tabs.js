function tabs(tabsSelector, tabsContentSelector, tabsParentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabsSelector),
        tabsContent = document.querySelectorAll(tabsContentSelector),
        tabsParent = document.querySelector(tabsParentSelector);

    function hideTabContent() {
        tabs.forEach(item => {
            item.classList.remove(activeClass);

        });
        tabsContent.forEach(item => {
            // item.style.display = 'none';
            item.classList.add('hide');
            // item.classList.remove('show', 'fade');
        });
    }

    function showTabContent(i = 0) {
        tabs[i].classList.add(activeClass);
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        // tabsContent[i].style.display = 'block';
    }


    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (e) => {
        const target = e.target;

        if (target && target.classList.contains(tabsSelector.slice(1))) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

}

export default tabs;