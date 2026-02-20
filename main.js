document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.tab-link');
    const panes = document.querySelectorAll('.tab-pane');
    const subTriggers = document.querySelectorAll('.trigger-sub');
    const subs = document.querySelectorAll('.sub-pane');
    const backBtns = document.querySelectorAll('.btn-back');

    // Навигация между главными страницами (Главная, Магазин, Услуги)
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');
            
            links.forEach(l => l.classList.remove('active'));
            panes.forEach(p => p.classList.remove('active'));
            
            link.classList.add('active');
            document.getElementById(target).classList.add('active');
            
            if(target === 'home') {
                resetToHome();
            }
        });
    });

    // Вход в сферу удовольствия (например, Романтика)
    subTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const subId = trigger.getAttribute('data-sub');
            
            // Прячем основные блоки главной
            document.getElementById('journal-section').style.display = 'none';
            document.getElementById('bento-main-container').style.display = 'none';
            document.querySelector('.hero-mini').style.display = 'none';
            
            // Показываем контент сферы
            document.getElementById(subId).classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Назад
    backBtns.forEach(btn => {
        btn.addEventListener('click', resetToHome);
    });

    function resetToHome() {
        subs.forEach(s => s.classList.remove('active'));
        document.getElementById('journal-section').style.display = 'block';
        document.getElementById('bento-main-container').style.display = 'block';
        document.querySelector('.hero-mini').style.display = 'flex';
    }
});