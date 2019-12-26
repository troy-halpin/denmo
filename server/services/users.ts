import { v4 as uuid } from "https://deno.land/std/uuid/mod.ts";

import { fetchData, persistData } from "./db.ts"
import { User } from "../models/user.ts"

type UserData = Pick<User, "name">

export const getUsers = async (): Promise<User[]> => {
  const users = await fetchData()

  // sorted by name
  return users.sort((a, b) => a.name.localeCompare(b.name))
}

export const getUser = async (userId: string): Promise<User | undefined> => {
  const users = await fetchData()

  return users.find(({ id }) => id === userId)
}

export const createUser = async (userData: UserData): Promise<string> => {
  const users = await fetchData()

  const newUser: User = {
    id: uuid.generate(),
    name: String(userData.name)
  }

  await persistData([...users, newUser])

  return newUser.id
}

export const updateUser = async (userId: string, userData: UserData): Promise<void> => {
  const user = await getUser(userId)

  if(!user) {
    throw new Error("User not found")
  }

  console.log({ userData })

  const updatedUser = {
    ...user,
    name: userData.name !== undefined ? String(userData.name) : user.name,
  }

  const users = await fetchData()
  const filteredUsers = users.filter(user => user.id !== userId)

  persistData([...filteredUsers, updatedUser])
}