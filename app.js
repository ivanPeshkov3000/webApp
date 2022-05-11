function tetrisRun() {
  let width = window.innerWidth; //получаем ширину экрана
  let height = window.innerHeight; // получаем высоту экрана
  const color = '#fbafcc';

  const app = new PIXI.Application(width, height); //создаем холст
  document.getElementById("main").appendChild(app.view); //выводим его в тело страницы

  const pixel = new PIXI.Graphics(); //создаем новый графический элемент
  pixel.lineStyle(0); //начинаем рисовать
  pixel.beginFill(color, 1); //задаем цвет
  pixel.drawRect() // рисуем квадрат
  pixel.endFill(); //закончили отрисовку
  pixel.interactive = true; //делаем интерактивным
  pixel.buttonMode = true; //меняем курсор при наведении
  pixel.x = app.renderer.width / 2; // задаем положение
  pixel.y = 0; // задаем положение
  app.stage.addChild(pixel); //выводим на холсте


  const gravity = 2;
  app.ticker.add(() => {
    pixel.x += gravity;
  });
}