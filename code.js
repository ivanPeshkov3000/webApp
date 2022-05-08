window.onload = () => {
  const tgApp = window.Telegram.WebApp;

  class App {
    constructor(content = []) {
      this.content = content;
      this.appContainer = document.getElementById("app")

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

  const app = new App();
  app.init()

}
