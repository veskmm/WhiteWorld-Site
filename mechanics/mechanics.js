const objectsImgList = ["../img/lead.png", "../img/ingot.png"];
let currentIndex = 0;
let isAnimating = false;

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.objects figure button');
  const img = document.getElementById('ObjectImg');

  // Обработчик окончания анимации (добавляем один раз)
  img.addEventListener('animationend', function(event) {
    const animationName = event.animationName;
    console.log(animationName);
    if (animationName === "slideInImg") {
      console.log('Slide-анимация закончилась!');
      
      // Меняем картинку
      img.src = objectsImgList[currentIndex];
      
      // Убираем старый класс и добавляем новый для появления
      img.classList.remove("animate-slide-img");
      img.classList.add("animate-fade-img");
      
    } else if (animationName === "fadeInImg") {
      console.log('Fade-анимация закончилась!');
      
      // Убираем класс появления
      img.classList.remove("animate-fade-img");
      isAnimating = false; // Разблокируем кнопки
    }
  });

  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      // Блокируем клики во время анимации
      if (isAnimating) return;
      
      // Меняем индекс
      if (button.id === "left") {
        currentIndex = (currentIndex - 1 + objectsImgList.length) % objectsImgList.length;
      } else if (button.id === "right") {
        currentIndex = (currentIndex + 1) % objectsImgList.length;
      }

      isAnimating = true;
      
      // Запускаем анимацию ухода
      img.classList.add("animate-slide-img");
      
      console.log('Текущий индекс:', currentIndex);
      console.log('Путь к картинке:', objectsImgList[currentIndex]);
    });
  });
});