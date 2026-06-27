const objectsImgList = ["../img/lead.png", "../img/ingot.png","../img/scrap.png"];
const objectsLoreList = [
    [
        "Свинец",
        "Тяжёлый, мягкий, смертельно важный.",
        "Глушит радиацию.",
        "Ищи там, где счётчик воет.",
        "Запасай.",
        "Без него дорога дальше — верная смерть."
    ],
    [
        "Металлический слиток",
        "Чистый, тяжёлый, блестящий на сломе.",
        "Рождён в огне из ржавого лома.",
        "Основа всего.",
        "Храни, не теряй.",
        "Пластины, станки, броня — всё начнётся с него."
    ],
    [
        "Металлолом",
        "Ржавый, острый, ненужный хлам.",
        "Остатки мёртвых машин.",
        "Найди в чёрных шипах — иногда везёт.",
        "Тащи в печь.",
        "Без него не будет ни станка, ни обшивки."
    ]
]

let currentIndex = 0;
let isAnimating = false;

document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.objects figure button');
  const img = document.getElementById('ObjectImg');
  const name = document.getElementById('ObjectName');
  const loreList = document.querySelectorAll('.objects p');

  // Обработчик окончания анимации (добавляем один раз)
  img.addEventListener('animationend', function(event) {
    const animationName = event.animationName;
    console.log(animationName);
    if (animationName === "slideInImg") {
      console.log('Slide-анимация закончилась!');
      
      // Меняем картинку
      img.src = objectsImgList[currentIndex];
      name.textContent  = objectsLoreList[currentIndex][0];

      for (var i = 0; i < loreList.length; i++) {
        loreList[i].textContent = objectsLoreList[currentIndex][i+1];
      }

      // Убираем старый класс и добавляем новый для появления
      img.classList.remove("animate-slide-img");
      img.classList.add("animate-fade-img");
      
    } else if (animationName === "fadeInImg") {
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