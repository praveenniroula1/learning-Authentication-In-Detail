import userSchema from "./userSchema.js";

export const insertUser = (obj) => {
  return userSchema(obj).save();
};

// Update your loginUser function
export const findUser = async (email) => {
  return await userSchema.findOne({ email });
};

export const updateOneAdminUser = (filter, update) => {
  return userSchema.findOneAndUpdate(filter, update, { new: true });
};

export const loginAdminUser = (filter) => {
  return userSchema.findOne(filter);
};
