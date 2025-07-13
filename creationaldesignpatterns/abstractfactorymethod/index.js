// Abstract Products
class Button {
    render() {}
  }
  
  class Textbox {
    render() {}
  }
  
  // Light Theme Products
  class LightButton extends Button {
    render() {
      console.log("Light Button Rendered");
    }
  }
  
  class LightTextbox extends Textbox {
    render() {
      console.log("Light Textbox Rendered");
    }
  }
  
  // Dark Theme Products
  class DarkButton extends Button {
    render() {
      console.log("Dark Button Rendered");
    }
  }
  
  class DarkTextbox extends Textbox {
    render() {
      console.log("Dark Textbox Rendered");
    }
  }
  
  // Abstract Factory
  class UIFactory {
    createButton() {}
    createTextbox() {}
  }
  
  // Concrete Factories
  class LightThemeFactory extends UIFactory {
    createButton() {
      return new LightButton();
    }
    createTextbox() {
      return new LightTextbox();
    }
  }
  
  class DarkThemeFactory extends UIFactory {
    createButton() {
      return new DarkButton();
    }
    createTextbox() {
      return new DarkTextbox();
    }
  }
  
  // Client Code
  function renderUI(factory) {
    const button = factory.createButton();
    const textbox = factory.createTextbox();
    button.render();
    textbox.render();
  }
  
  const lightFactory = new LightThemeFactory();
  renderUI(lightFactory); // Renders light-themed components
  
  const darkFactory = new DarkThemeFactory();
  renderUI(darkFactory); // Renders dark-themed components
  