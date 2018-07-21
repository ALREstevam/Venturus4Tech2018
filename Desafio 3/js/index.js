function Card(props) {
  return React.createElement(
    "div",
    { className: "card" },
    React.createElement("img", { className: "card-img-top", src: props.imgSrc, alt: "", style: { width: '350px' } }),
    React.createElement(
      "div",
      { className: "card-body" },
      React.createElement(
        "h2",
        { className: "card-title" },
        props.title
      ),
      React.createElement(
        "h3",
        { className: "card-title font-weight-bold small" },
        "Descri\xE7\xE3o"
      ),
      React.createElement(
        "p",
        null,
        props.description
      ),
      React.createElement(
        "h3",
        { className: "card-title font-weight-bold small" },
        "Sal\xE1rio base"
      ),
      React.createElement(
        "p",
        null,
        "R$ ",
        props.baseSalary
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-warning mx-1" },
        React.createElement("i", { "class": "far fa-edit" })
      ),
      React.createElement(
        "button",
        { type: "button", className: "btn btn-danger mx-1" },
        React.createElement("i", { "class": "far fa-trash-alt" })
      )
    )
  );
}

var app = React.createElement(
  "div",
  null,
  React.createElement(Card, { imgSrc: "http://afrisoft.co.ke/wp-content/uploads/2017/11/google-1.jpg", title: "Programador na linguagem K", description: "lorem ipsum lorem ipsum lorem ipsum", baseSalary: "100,23" })
);

ReactDOM.render(app, document.querySelector("#app"));