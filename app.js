class App {
  constructor(content = [], tgWorkspace = window.Telegram.WebApp) {
    this.tg = tgWorkspace || (() => {
      throw new Error("Not load Telegram WebApp")
    })()

    this.content = content;

    this.appContainer = document.getElementById("app") || (() => {
      const container = document.createElement('div');
      container.id = "app";
      return container;
    })()

    this._init();
  };

  // Создаем элементы приложения, и добавляем их на страницу
  _init() {
    document.body.appendChild(this.appContainer);
    this.resize(this.tg.viewportStableHeight);
    if (!Array.isArray(this.content)) this.content = [this.content];
    if (!this.content.length) {
      this.isEmpty = true;
      this.appContainer.innerHTML = "<h2>Is empty!</h2>"
      return;
    }

    const frag = new DocumentFragment();
    for (const block of this.content) {
      if (!block instanceof HTMLElement) continue;
      frag.appendChild(block);
    }
    this.appContainer.appendChild(frag);
  }

  // установка высоты контейнера приложения
  resize(h) {
    this.appContainer.style.height = h;
  }

  add(block) {
    if (!block instanceof HTMLElement) throw new Error("Block is not istance HTMLElement");
    if (this.isEmpty) {
      this.appContainer.innerHTML = "";
      this.isEmpty = false;
    }
    this.appContainer.appendChild(block)
  }

}
