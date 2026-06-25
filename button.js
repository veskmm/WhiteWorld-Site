document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll('.buttons button');

  buttons.forEach((button) => {
    button.addEventListener('click', function() {
      let targetPage;
      targetPage = "../" + String(this.id) + "/" + String(this.id) + ".html";
      
      const currentPage = window.location.pathname.split('/').pop();
      const targetFile = targetPage.split('/').pop();
      
      if (currentPage === targetFile) {
        console.log("Уже на этой странице");
        return;
      }
      
      // Плавное исчезновение
      document.body.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
      document.body.style.opacity = '0';
      document.body.style.transform = 'scale(0.96)';
      
      setTimeout(() => {
        window.location.href = targetPage;
      }, 400);
    });
  });
});