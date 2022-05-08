class App {
  constructor(content = [], telegramSpace = window.Telegram.WebApp) {
    this.tg = telegramSpace || (() => {
      throw new Error("Not load Telegram WebApp")
    })()
    this.content = content;
    this.appContainer = document.getElementById("app") || (() => {
      const container = document.createElement('div');
      container.id = "app";
      document.body.appendChild(container)
      return container;
    })()

  };

  resize(h) {
    this.appContainer.style.height = h;
  }

  init() {
    this.resize(tgApp.viewportStableHeight);
    if (!this.content.length) {
      return this.appContainer.innerHTML = "<h2>Is empty app</h2>"
    }

    const frag = new DocumentFragment();
    for (const block in this.content) {
      frag.appendChild(block);
    }
    this.appContainer.appendChild(frag);
  }
}
