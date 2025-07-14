// Base Handler class
class SupportHandler {
    setNext(handler) {
      this.nextHandler = handler;
      return handler; // allows chaining
    }
  
    handle(request) {
      if (this.nextHandler) {
        return this.nextHandler.handle(request);
      }
      console.log(`No one could handle the request: ${request.description}`);
    }
  }
  
  // Concrete Handler 1: Level 1 Support
  class Level1Support extends SupportHandler {
    handle(request) {
      if (request.level <= 1) {
        console.log(`Level 1 Support handled: ${request.description}`);
      } else {
        super.handle(request);
      }
    }
  }
  
  // Concrete Handler 2: Level 2 Support
  class Level2Support extends SupportHandler {
    handle(request) {
      if (request.level <= 2) {
        console.log(`Level 2 Support handled: ${request.description}`);
      } else {
        super.handle(request);
      }
    }
  }
  
  // Concrete Handler 3: Manager
  class Manager extends SupportHandler {
    handle(request) {
      console.log(`Manager handled: ${request.description}`);
    }
  }
  
  // Client code
  const level1 = new Level1Support();
  const level2 = new Level2Support();
  const manager = new Manager();
  
  // Setup chain: Level1 -> Level2 -> Manager
  level1.setNext(level2).setNext(manager);
  
  // Test requests
  const requests = [
    { level: 1, description: "Password reset" },
    { level: 2, description: "Software install error" },
    { level: 3, description: "Server is down" }
  ];
  
  requests.forEach(req => level1.handle(req));
  