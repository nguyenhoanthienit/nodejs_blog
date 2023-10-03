const HandleBars = require('handlebars');

module.exports = {
  sum: (a, b) => a + b,
  sortable: (field, sort) => {
    const sortType = field === sort.column ? sort.type : "default";

    const icons = {
      default: "↑↓",
      asc: "↑",
      desc: "↓",
    };
    const types = {
      default: "desc",
      asc: "desc",
      desc: "asc",
    };
    const icon = icons[sortType];
    const type = types[sortType];

    const href = HandleBars.escapeExpression(`?_sort&column=${field}&type=${type}`)

    // prevent xss
    return new HandleBars.SafeString(`<a href="${href}"><span>${icon}</span></a>`);
  },
};
