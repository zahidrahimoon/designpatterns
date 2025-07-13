// ❌ Incompatible XML data source
function getXMLData() {
    return `<user><name>Zahid</name><age>25</age></user>`;
  }
  
  // ✅ JSON-based processor (expects JSON object)
  function processUserData(jsonData) {
    console.log("Processing user data...");
    console.log(`Name: ${jsonData.name}, Age: ${jsonData.age}`);
  }
  
  // 🛠️ Adapter: Converts XML to JSON
  function XMLtoJSONAdapter(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  
    const name = xmlDoc.getElementsByTagName("name")[0].textContent;
    const age = parseInt(xmlDoc.getElementsByTagName("age")[0].textContent);
  
    return {
      name,
      age,
    };
  }
  
  // 🔄 Using the Adapter
  const xmlData = getXMLData();                  // Get data in XML
  const adaptedJSON = XMLtoJSONAdapter(xmlData); // Adapt it to JSON
  processUserData(adaptedJSON);                  // Now it works ✅
  