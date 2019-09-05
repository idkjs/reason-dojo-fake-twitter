
# reason-dojo-fake-twitter

## backend-source: <https://github.com/bkase/Twitter-fake>

## fake-twitter-server

Get it here: <https://github.com/idkjs/fake-twitter-server>
You need to have [`opam`](https://opam.ocaml.org/) and [`ocaml`](http://ocaml.org/docs/install.html) installed to run this backend.

Run `dune external-lib-deps --missing twitter.exe` to get stuff you are missing. I dont know how to install otherwise. Follow the extremely useful instructions the cli gives you.

Run `dune build twitter.exe` to run the server.

Open `http://localhost:9999/graphql` to see `graphiql` interface.

## frontend-source: <https://github.com/Schmavery/reason-dojo-fake-twitter>

Run `yarn send-introspection-query http://localhost:9999/graphql` to get the `graphql schema.json` for the `ppx`.

Compile and start with `yarn bs:watch` and in another terminal `yarn start`.

## TakeAways

Simplest refect query ever:

```reason
let refetch = React.useCallback(() => executeQuery(None));
```

This has type:

```reason
ReasonUrql.Hooks.partialOperationContextFn
type partialOperationContextFn = option(
  UrqlClient.Types.partialOperationContext
) => unit
<root>/fake-twitter/src/Feed.re
```

which is found [here](https://github.com/FormidableLabs/reason-urql/blob/a9b9d9298428fc98c7195793f493500c9e3a413b/src/UrqlClient.re#L47)

and which i don't understand yet.
