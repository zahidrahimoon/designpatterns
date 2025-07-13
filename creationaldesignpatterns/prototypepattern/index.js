const notificationPrototype = {
    type: "Generic",
    priority: "normal",
    send() {
      console.log(`[${this.type} - ${this.priority.toUpperCase()}]: ${this.message}`);
    }
  }
  
  // 🔔 Creating a reminder notification
  const reminderNotification = Object.create(notificationPrototype)
  reminderNotification.type = "Reminder"
  reminderNotification.priority = "high"
  reminderNotification.message = "Your meeting starts in 15 minutes."
  
  // 📢 Creating a promotional notification
  const promoNotification = Object.create(notificationPrototype)
  promoNotification.type = "Promotion"
  promoNotification.priority = "low"
  promoNotification.message = "Get 50% off on your next purchase!"
  
  // 🛎️ Creating a system alert
  const alertNotification = Object.create(notificationPrototype)
  alertNotification.type = "System Alert"
  alertNotification.priority = "critical"
  alertNotification.message = "Server CPU usage has exceeded 90%."
  
  // Sending notifications
  reminderNotification.send()  // [Reminder - HIGH]: Your meeting starts in 15 minutes.
  promoNotification.send()     // [Promotion - LOW]: Get 50% off on your next purchase!
  alertNotification.send()     // [System Alert - CRITICAL]: Server CPU usage has exceeded 90%.
  