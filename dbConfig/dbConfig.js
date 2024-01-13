import mongoose from "mongoose";

export const dbConfig = () => {
  try {
    const conStr = "mongodb://localhost/learningWithPrasanGhimire";
    const connecting = mongoose.connect(conStr);
    if (connecting) {
      connecting && console.log("MongoDB COnnected");
    }
  } catch (error) {
    console.log(error);
  }
};
