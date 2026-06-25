
document.addEventListener("DOMContentLoaded", function() {
  const spans = document.querySelectorAll('.main_title p span');

  spans.forEach((span) => {
    // Случайная задержка от 0 до 0.3 секунды (без волны)
    span.style.animationDelay = `${Math.random() * 0.5}s`;
  });
})

