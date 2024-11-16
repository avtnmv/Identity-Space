document.querySelectorAll('.accordion-header').forEach(header => {
    header.onclick = function() {
        const content = this.nextElementSibling;
        content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
    };
});

const accordionHeaders = document.querySelectorAll('.accordion-header');
accordionHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const icon = header.querySelector('.accordion-icon');
    icon.classList.toggle('rotated');
  });
});
