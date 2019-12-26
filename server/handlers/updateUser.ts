import { updateUser } from "../services/users.ts";

export default async ({ params, request, response }) => {
  const userId = params.id;

  if (!userId) {
    response.status = 400;
    response.body = { msg: "Invalid user id" };
    return;
  }

  if (!request.hasBody) {
    response.status = 400;
    response.body = { msg: "Invalid user data" };
    return;
  }

  const {
    value: { name }
  } = await request.body();

  await updateUser(userId, { name, });

  response.body = { msg: "User updated" };
};
