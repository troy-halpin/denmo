# Denmo
A silly WIP project to test out [Deno](deno.land), _eventually_ it will be a loose copy of 
Venmo's front end with a Deno/[Oak](https://deno.land/x/oak/README.md) server

### Running the server
_denmo/server_

`deno -A index.ts`

_(Note: `-A` flag allows all permissions, recommended for dev only)_

And the server will be available on `localhost:5000` (on the first run it will download and cache all dependencies)

### Running the client
The client is just a `create-react-app` client in typescript

_denmo/client_

`yarn start`

The client will be available on `localhost:3000`