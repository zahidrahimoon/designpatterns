// Raw fetch API is messy; this facade simplifies it
const APIClient = {
    async getJSON(url) {
      const response = await fetch(url);
      return response.json();
    },
    async postJSON(url, data) {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      return response.json();
    }
  };
  
  // ✅ Easy usage
  APIClient.getJSON("https://api.example.com/users").then(console.log);
  APIClient.postJSON("https://api.example.com/users", { name: "Zahid" });
  