import { createUser } from "../services/users.ts"

export default async ({ request, response }) => {
  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const { value } = await request.body()
  const name = JSON.parse(value).name

  if (!name) {
    response.status = 422;
    response.body = { msg: "Incorrect user data. Name is required" };
    return;
  }

  const userId = await createUser({ name });

  response.body = { msg: "User created", userId };
}