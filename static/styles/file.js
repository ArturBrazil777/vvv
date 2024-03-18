document.querySelector('.burger-menu-btn').addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.toggle('open');
});

document.querySelectorAll('.burger-menu-content ul li').forEach(item => {
  item.addEventListener('click', function(event) {
    const submenu = this.querySelector('ul');
    if (submenu) {
      event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на пункт подменю
      submenu.classList.toggle('open');
    } else {
      document.querySelector('.burger-menu').classList.remove('open');
    }
  });
});

document.querySelector('.burger-menu-btn').addEventListener('click', function(event) {
  event.stopPropagation(); // Предотвращаем всплытие события, чтобы не закрывать меню при клике на бургер
});

document.addEventListener('click', function() {
  document.querySelector('.burger-menu').classList.remove('open');
});

document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('content');
  const paragraphs = content.querySelectorAll('p');
  let isVisible = false;

  function checkVisibility() {
    paragraphs.forEach((paragraph) => {
      const rect = paragraph.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (!isVisible && rect.top <= viewHeight) {
        isVisible = true;
        typeWriter(paragraph);
      }
    });
  }

  function typeWriter(element) {
    const text = element.textContent.trim();
    element.textContent = '';
    let i = 0;
    const speed = 30; // Adjust speed as needed
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }


  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility on page load
});

document.addEventListener('DOMContentLoaded', function() {
  const content = document.getElementById('content');
  let paragraphs = content.querySelectorAll('p'); // Обновляем список параграфов

  function checkVisibility() {
    paragraphs = content.querySelectorAll('p'); // Обновляем список параграфов
    paragraphs.forEach((paragraph) => {
      const rect = paragraph.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      if (!paragraph.classList.contains('printed') && rect.top <= viewHeight) {
        paragraph.classList.add('printed');
        typeWriter(paragraph);
      }
    });
  }

  function typeWriter(element) {
    const text = element.textContent.trim();
    element.textContent = '';
    let i = 0;
    const speed = 30; // Adjust speed as needed
    function type() {
      if (i < text.length) {
        element.textContent += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  window.addEventListener('scroll', checkVisibility);
  checkVisibility(); // Check visibility on page load
});