function tetrisRun() {
  let width = window.outerWidth; //получаем ширину экрана
  let height = window.Talegram.WeabApp.viewportHeight; // получаем высоту экрана
  const color = 0xFBACCC;

  const app = new PIXI.Application({ width, height, backgroundColor: 0xFFBBC2
}); //создаем холст
  const appContainer = document.getElementById("main");
  appContainer.innerHTML = "";
  appContainer.appendChild(app.view); //выводим его в тело страницы

  const pixel = new PIXI.Graphics(); //создаем новый графический элемент
  pixel.lineStyle(0); //начинаем рисовать
  pixel.beginFill(color, 1); //задаем цвет
  pixel.drawRect(app.renderer.width / 2, 0, 20, 20) // рисуем квадрат
  pixel.endFill(); //закончили отрисовку

  pixel.interactive = true; //делаем интерактивным
  pixel.buttonMode = true; //меняем курсор при наведении
  app.stage.addChild(pixel); //выводим на холсте


  const gravity = 2;
  app.ticker.add(() => {
    pixel.x += gravity;
  });
}