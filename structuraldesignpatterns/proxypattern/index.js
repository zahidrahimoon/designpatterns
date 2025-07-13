// 👤 Real service
class UserService {
    deleteUser(userId) {
      console.log(`User with ID ${userId} has been deleted.`);
    }
  }
  
  // 🛡️ Proxy with access control
  class UserServiceProxy {
    constructor(realService, currentUserRole) {
      this.realService = realService;
      this.role = currentUserRole;
    }
  
    deleteUser(userId) {
      if (this.role !== "admin") {
        console.log("Access denied: Only admins can delete users.");
        return;
      }
      this.realService.deleteUser(userId);
    }
  }
  
  // ✅ Client
  const realService = new UserService();
  
  // As a regular user
  const userProxy = new UserServiceProxy(realService, "user");
  userProxy.deleteUser(42); // ❌ Access denied
  
  // As an admin
  const adminProxy = new UserServiceProxy(realService, "admin");
  adminProxy.deleteUser(42); // ✅ User deleted
  