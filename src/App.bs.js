// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as React from "react";
import * as AppModuleCss from "./App.module.css";

var css = AppModuleCss;

var logo = (require('./logo.svg'));

function App(Props) {
  return React.createElement("div", {
              className: css.app
            }, React.createElement("header", {
                  className: css.appHeader
                }, React.createElement("img", {
                      className: css.appLogo,
                      alt: "logo",
                      src: logo
                    }), React.createElement("p", undefined, "Edit ", React.createElement("code", undefined, "src/App.re"), " and save to reload."), React.createElement("a", {
                      className: css.appLink,
                      href: "https://reasonml.github.io/reason-react",
                      rel: "noopener noreferrer",
                      target: "_blank"
                    }, "Learn Reason React")));
}

var make = App;

export {
  css ,
  logo ,
  make ,
  
}
/* css Not a pure module */
