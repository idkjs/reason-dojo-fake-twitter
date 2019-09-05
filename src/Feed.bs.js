// Generated by BUCKLESCRIPT VERSION 5.0.6, PLEASE EDIT WITH CARE

import * as $$Array from "bs-platform/lib/es6/array.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";
import * as Js_dict from "bs-platform/lib/es6/js_dict.js";
import * as Js_json from "bs-platform/lib/es6/js_json.js";
import * as NewPost from "./NewPost.bs.js";
import * as ReasonUrql from "reason-urql/src/ReasonUrql.bs.js";
import * as Caml_option from "bs-platform/lib/es6/caml_option.js";

var ppx_printed_query = "query feed  {\nfeed  {\nmessage  \nauthor  \ntimestamp  \n}\n\n}\n";

function parse(value) {
  var match = Js_json.decodeObject(value);
  if (match !== undefined) {
    var match$1 = Js_dict.get(Caml_option.valFromOption(match), "feed");
    var tmp;
    if (match$1 !== undefined) {
      var value$1 = Caml_option.valFromOption(match$1);
      var match$2 = Js_json.decodeArray(value$1);
      tmp = match$2 !== undefined ? match$2.map((function (value) {
                var match = Js_json.decodeObject(value);
                if (match !== undefined) {
                  var value$1 = Caml_option.valFromOption(match);
                  var match$1 = Js_dict.get(value$1, "message");
                  var tmp;
                  if (match$1 !== undefined) {
                    var value$2 = Caml_option.valFromOption(match$1);
                    var match$2 = Js_json.decodeString(value$2);
                    tmp = match$2 !== undefined ? match$2 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$2));
                  } else {
                    tmp = Js_exn.raiseError("graphql_ppx: Field message on type TweetOutput is missing");
                  }
                  var match$3 = Js_dict.get(value$1, "author");
                  var tmp$1;
                  if (match$3 !== undefined) {
                    var value$3 = Caml_option.valFromOption(match$3);
                    var match$4 = Js_json.decodeString(value$3);
                    tmp$1 = match$4 !== undefined ? match$4 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$3));
                  } else {
                    tmp$1 = Js_exn.raiseError("graphql_ppx: Field author on type TweetOutput is missing");
                  }
                  var match$5 = Js_dict.get(value$1, "timestamp");
                  var tmp$2;
                  if (match$5 !== undefined) {
                    var value$4 = Caml_option.valFromOption(match$5);
                    var match$6 = Js_json.decodeString(value$4);
                    tmp$2 = match$6 !== undefined ? match$6 : Js_exn.raiseError("graphql_ppx: Expected string, got " + JSON.stringify(value$4));
                  } else {
                    tmp$2 = Js_exn.raiseError("graphql_ppx: Field timestamp on type TweetOutput is missing");
                  }
                  return {
                          message: tmp,
                          author: tmp$1,
                          timestamp: tmp$2
                        };
                } else {
                  return Js_exn.raiseError("graphql_ppx: Object is not a value");
                }
              })) : Js_exn.raiseError("graphql_ppx: Expected array, got " + JSON.stringify(value$1));
    } else {
      tmp = Js_exn.raiseError("graphql_ppx: Field feed on type query is missing");
    }
    return {
            feed: tmp
          };
  } else {
    return Js_exn.raiseError("graphql_ppx: Object is not a value");
  }
}

function make(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function makeWithVariables(param) {
  return {
          query: ppx_printed_query,
          variables: null,
          parse: parse
        };
}

function ret_type(f) {
  return /* module */[];
}

var MT_Ret = /* module */[];

var GetFeed = /* module */[
  /* ppx_printed_query */ppx_printed_query,
  /* query */ppx_printed_query,
  /* parse */parse,
  /* make */make,
  /* makeWithVariables */makeWithVariables,
  /* ret_type */ret_type,
  /* MT_Ret */MT_Ret
];

function Feed$Tweet(Props) {
  var post = Props.post;
  return React.createElement("div", undefined, post.author + (": " + post.message), React.createElement("br", undefined));
}

var Tweet = /* module */[/* make */Feed$Tweet];

function Feed(Props) {
  var request = make(/* () */0);
  var match = Curry._4(ReasonUrql.Hooks[/* useQuery */1], request, undefined, undefined, /* () */0);
  var executeQuery = match[1];
  var response = match[0][/* response */3];
  var refetch = React.useCallback((function (param) {
          return Curry._1(executeQuery, undefined);
        }));
  var tmp;
  if (typeof response === "number") {
    tmp = response === 0 ? "Load" : "Not found???";
  } else if (response.tag) {
    var match$1 = response[0][/* networkError */0];
    if (match$1 !== undefined) {
      console.log(Caml_option.valFromOption(match$1));
      tmp = React.createElement("div", undefined, "Network Error");
    } else {
      tmp = React.createElement("div", undefined, "No Network Error");
    }
  } else {
    tmp = $$Array.map((function (post) {
            return React.createElement(Feed$Tweet, {
                        post: post,
                        key: post.timestamp
                      });
          }), response[0].feed);
  }
  return React.createElement("div", undefined, React.createElement(NewPost.make, {
                  refetch: refetch
                }), React.createElement("hr", undefined), React.createElement("div", undefined, tmp));
}

var make$1 = Feed;

export {
  GetFeed ,
  Tweet ,
  make$1 as make,
  
}
/* react Not a pure module */
