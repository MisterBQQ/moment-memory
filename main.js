document.addEventListener('DOMContentLoaded', () => {
    
    // ЭЛЕМЕНТЫ
    const links = document.querySelectorAll('.tab-link');
    const panes = document.querySelectorAll('.tab-pane');
    const triggers = document.querySelectorAll('.trigger-sub');
    const sidebar = document.getElementById('sidebar');
    const openSidebar = document.querySelector('.open-sidebar');
    const closeSidebar = document.querySelector('.close-sidebar');
    const bentoMain = document.getElementById('bento-main-container');
    const subPanes = document.querySelectorAll('.sub-pane');
    const backBtns = document.querySelectorAll('.btn-back');

    // ШТОРКА (SIDEBAR)
    openSidebar.addEventListener('click', () => sidebar.classList.add('open'));
    closeSidebar.addEventListener('click', () => sidebar.classList.remove('open'));

    // ФУНКЦИЯ ПЕРЕКЛЮЧЕНИЯ ТАБОВ
    function switchTab(targetId) {
        sidebar.classList.remove('open'); // Закрываем шторку при клике
        
        links.forEach(l => l.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));

        const targetPane = document.getElementById(targetId);
        const activeLinks = document.querySelectorAll(`.tab-link[data-target="${targetId}"]`);

        if (targetPane) targetPane.classList.add('active');
        activeLinks.forEach(l => l.classList.add('active'));

        // Сброс внутренних категорий
        if (bentoMain) bentoMain.style.display = 'block';
        subPanes.forEach(s => s.classList.remove('active'));
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            switchTab(link.getAttribute('data-target'));
        });
    });

    // ПЕРЕХОД В КАТЕГОРИИ
    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const subId = trigger.getAttribute('data-sub');
            
            // Если кликнули с главной, идем в Разделы
            if (document.getElementById('home').classList.contains('active')) {
                switchTab('explore');
            }

            if (bentoMain) bentoMain.style.display = 'none';
            document.getElementById(subId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    backBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            if (bentoMain) bentoMain.style.display = 'block';
            subPanes.forEach(s => s.classList.remove('active'));
        });
    });
});