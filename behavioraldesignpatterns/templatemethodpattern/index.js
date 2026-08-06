// Template Method: the skeleton and its order are fixed, single steps are passed in.

const makeReport = ({ header = () => "== Report ==", body, footer = () => "-- end --" }) =>
  () => [header(), body(), footer()].join("\n");

const salesReport = makeReport({ body: () => "Sales: 1200" });
const usersReport = makeReport({ header: () => "== Users ==", body: () => "Users: 340" });

console.log(salesReport());
console.log(usersReport());
