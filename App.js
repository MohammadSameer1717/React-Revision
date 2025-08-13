const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React!"
);

const root = ReactDom.createRoot(document.getElementById("root"));

root.render(heading);