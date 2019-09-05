open ReasonUrql;
[@bs.module "./serviceWorker"]
external register_service_worker: unit => unit = "register";
[@bs.module "./serviceWorker"]
external unregister_service_worker: unit => unit = "unregister";

let client = Client.make(~url="http://localhost:9999/graphql", ());
ReactDOMRe.renderToElementWithId(
  <Provider value=client> <Feed /> </Provider>,
  "root",
);
// If you want your app to work offline and load faster, you can change
// unregister_service_worker() to register_service_worker() below. Note this
// comes with some pitfalls. Learn more about service workers:
// https://bit.ly/CRA-PWA
unregister_service_worker();
