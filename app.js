let randcolRect;
function tetrisRun() {
  let width = window.outerWidth; //получаем ширину экрана
  let height = window.Telegram.WebApp.viewportStableHeight; // получаем высоту экрана
  const color = 0xABACD0;

  const app = new PIXI.Application({ width, height, backgroundColor: 0xF1F1C2
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

  randcolRect = () => {
    const rndm = randomColor();
    pixel.beginFill(rndm);
    pixel.endFill();

  }

  const gravity = 0.5;
  app.ticker.add(function getDown() {
    if ((pixel.y + pixel.height) > app.view.height) {
      return app.ticker.remove(getDown);
    }
    pixel.y += gravity;
  });
}

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '0x';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// Коллизия точек
function pointCollision(point1, point2) {
  return (point1.x === poin2.x && point1.y === point2.y) ? true : false;
}

// Коллизия кругов
function circleCollision(circle1, circle2) {
  let dx = Math.abs(circle1.x - circle2.x);
  let dy = Math.abs(circle1.y - circle2.y);
  let dr = circle1.radius + circle2.radius;
  
  return (Math.sqrt(dx^2 + dy^2) < dr) ? true : false;
}

// Коллизия круга и точки
function circpointCollision(circle, point) {
  let dx = Math.abs(circle.x - point.x);
  let dy = Math.abs(circle.y - point.y);
  let dr = circle.radius;

  return (Math.sqrt(dx ^ 2 + dy ^ 2) < dr) ? true : false;
}

// Коллизия квадратов
function rectCollision(rect1, rect2) {
  let dx = rect1.x - rect2.x; // Расстояние между центрами по X
  let dy = rect1.y - rect2.y; // Расстояние между центрами по Y
  let rx = (rect1.width + rect2.width) / 2; // Минимальноe расстояние по X
  let ry = (rect1.height + rect2.height) / 2; // Минимальное расстояние по Y

  return (Math.abs(dx) < rx && Math.abs(dy) < ry) ? true : false;
}

// Коллизия квадрата и точки
function rectpointCollision(rect, point) {
  let dx = rect.x - point.x; // Расстояние между центрами по X
  let dy = rect.y - point.y; // Расстояние между центрами по Y
  let rx = rect.width / 2; // Минимальноe расстояние по X
  let ry = rect.height / 2; // Минимальное расстояние по Y

  return (Math.abs(dx) < rx && Math.abs(dy) < ry) ? true : false;
}
