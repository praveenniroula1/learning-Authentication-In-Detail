import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fName: {
      type: String,
      required: true,
    },

    lName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    emailValidationCode: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "inactive",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
