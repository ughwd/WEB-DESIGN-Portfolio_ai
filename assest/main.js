// ================================
// МОБИЛЬНОЕ МЕНЮ (бургер)
// ================================
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Закрытие меню при клике на ссылку
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ================================
// ИЗМЕНЕНИЕ НАВБАРА ПРИ СКРОЛЛЕ
// ================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ================================
// ПОДСВЕТКА АКТИВНОГО ПУНКТА МЕНЮ
// ================================
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === `#${current}`) {
            item.classList.add('active');
        }
    });
});

// ================================
// ФОРМА КОНТАКТОВ (заглушка)
// ================================
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Здесь можно добавить отправку на сервер / Formspree / EmailJS
        // Пока просто показываем сообщение

        const name = document.getElementById('name').value;

        alert(`Спасибо, ${name}! Сообщение отправлено (это демо-версия).`);

        // Очистка формы
        contactForm.reset();
    });
}

// ================================
// ПЛАВНОЕ ПОЯВЛЕНИЕ СЕКЦИЙ (опционально)
// ================================
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Можно раскомментировать, если добавишь класс .fade-in в CSS
// document.querySelectorAll('section').forEach(section => {
//     section.classList.add('fade-in');
//     observer.observe(section);
// });