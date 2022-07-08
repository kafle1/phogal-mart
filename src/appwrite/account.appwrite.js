import { ACCOUNT, DATABASE, FUNCTION } from "./config";

export const Account = {
  signup: async ({ name, email, password, address }) => {
    try {
      //Create new account
      const userAccount = await ACCOUNT.create(
        "unique()",
        email,
        password,
        name
      );
      //Create session for the user and store in localstorage
      const userSession = await ACCOUNT.createSession(email, password);
      localStorage.setItem("uid", userSession.userId);

      //Create new user in db
      const userData = await DATABASE.createDocument(
        import.meta.env.VITE_USERS_COLLECTION_ID,
        userAccount.$id,
        { address }
      );

      // Create a new bucket for the user
      const bucketData = await FUNCTION.createExecution(
        import.meta.env.VITE_CREATE_BUCKET_FUNCTION_ID,
        JSON.stringify({ uid: userAccount.$id, name })
      );

      return {
        message: "Success",
        data: { userAccount, userData, userSession, bucketData },
      };
    } catch (error) {
      return { message: "Failure", error };
    }
  },
  signin: async ({ email, password }) => {
    try {
      //Create session for the user and store in localstorage
      const userSession = await ACCOUNT.createSession(email, password);
      localStorage.setItem("uid", userSession.userId);

      return { message: "Success", data: { userSession } };
    } catch (error) {
      return { message: "Failure", error };
    }
  },
  isLoggedIn: () => {
    try {
      const session = localStorage.getItem("cookieFallback");
      return session === "[]" || session == null ? false : true;
    } catch (error) {
      return false;
    }
  },
  logout: async () => {
    try {
      //Delete the current user's session and remove session form localstorage
      const data = await ACCOUNT.deleteSession("current");
      localStorage.removeItem("uid");
      return { message: "Success", data };
    } catch (error) {
      return { message: "Failure", error };
    }
  },
};
