// Bridge: keep "what to do" and "how to send it" separate, so both can change alone.

const sms = (msg) => "SMS: " + msg;
const email = (msg) => "Email: " + msg;

const notify = (channel) => (msg) => channel(msg);
const notifyUrgent = (channel) => (msg) => channel("[URGENT] " + msg);

console.log(notify(sms)("Hi")); // SMS: Hi
console.log(notify(email)("Hi")); // Email: Hi
console.log(notifyUrgent(email)("Server down")); // Email: [URGENT] Server down
