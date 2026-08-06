// Adapter: wrap a mismatched interface so existing code can use it unchanged.

const oldPrinter = (text) => "OLD: " + text;

const printerAdapter = (legacyPrint) => ({
  print: ({ body }) => legacyPrint(body),
});

const printer = printerAdapter(oldPrinter);
console.log(printer.print({ body: "hello" })); // OLD: hello
console.log(printer.print({ body: "world" })); // OLD: world
