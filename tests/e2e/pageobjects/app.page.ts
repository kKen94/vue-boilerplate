class App {
  /**
   * elements
   */
  // eslint-disable-next-line class-methods-use-this
  get heading() {
    return $('h1');
  }

  /**
   * methods
   */
  // eslint-disable-next-line class-methods-use-this
  open(path = '/') {
    browser.url(path);
  }
}

export default new App();
