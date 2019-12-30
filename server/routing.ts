import { Router } from "https://deno.land/x/oak@v2.9.0/mod.ts";
import getUsers from "./handlers/getUsers.ts";
import getUserDetails from "./handlers/getUserDetails.ts";
import createUser from "./handlers/createUser.ts";
import updateUser from "./handlers/updateUser.ts";

const router = new Router();

router
  .get("/users", getUsers)
  .get("/users/:id", getUserDetails)
  .post("/users", createUser)
  .put("/users/:id", updateUser)

export default router;