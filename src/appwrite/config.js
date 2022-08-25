import { Appwrite } from "appwrite";

const appwrite = new Appwrite();

appwrite
  .setEndpoint(import.meta.env.VITE_API_ENDPOINT)
  .setProject(import.meta.env.VITE_PROJECT_ID)

export const DATABASE = appwrite.database;
export const STORAGE = appwrite.storage;
export const ACCOUNT = appwrite.account;
export const FUNCTION = appwrite.functions;
