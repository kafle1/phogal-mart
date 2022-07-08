import { ACCOUNT, DATABASE, FUNCTION, STORAGE } from "./config";

export const Database = {
  addNewPhotograph: async ({ title, description, price, image }) => {
    try {
      const { userId } = await ACCOUNT.getSession("current");

      //Upload photo
      const { $id } = await STORAGE.createFile(userId, "unique()", image, [
        "role:member",
      ]);

      //Save photo details to photographs collection
      const photoDetails = await DATABASE.createDocument(
        import.meta.env.VITE_PHOTOGRAPH_COLLECTION_ID,
        "unique()",
        {
          title,
          description,
          price,
          photo_id: $id,
          bucket_id: userId,
        }
      );
      //Update user's collection
      const { photographs } = await DATABASE.getDocument(
        import.meta.env.VITE_USERS_COLLECTION_ID,
        userId
      );

      const updatedUser = await DATABASE.updateDocument(
        import.meta.env.VITE_USERS_COLLECTION_ID,
        userId,
        { photographs: [...photographs, photoDetails.$id] }
      );
      return { message: "Success", data: { photoDetails, updatedUser } };
    } catch (error) {
      return { message: "Failure", error };
    }
  },
  getPhotographs: async (uid) => {
    try {
      if (uid === undefined) {
        const images = [];
        //Get all the photographs
        const { documents } = await DATABASE.listDocuments(
          import.meta.env.VITE_PHOTOGRAPH_COLLECTION_ID
        );
        //Get image preview
        documents.forEach(
          async ({ bucket_id, photo_id, price, title, description }) => {
            const { href: imgURL } = STORAGE.getFilePreview(
              bucket_id,
              photo_id
            );
            images.push({ title, description, price, imgURL });
          }
        );

        return { message: "Success", data: images };
      } else {
        const images = [];
        //Get user's photgraphs
        const { photographs } = await DATABASE.getDocument(
          import.meta.env.VITE_USERS_COLLECTION_ID,
          uid
        );
        //Get photograph details
        photographs.forEach(async (photograph) => {
          const { bucket_id, photo_id, price, title, description } =
            await DATABASE.getDocument(
              import.meta.env.VITE_PHOTOGRAPH_COLLECTION_ID,
              photograph
            );
          const { href: imgURL } = STORAGE.getFilePreview(bucket_id, photo_id);
          images.push({ title, description, price, imgURL });
        });
        return { message: "Success", data: images };
      }
    } catch (error) {
      return { message: "Failure", error };
    }
  },
};
