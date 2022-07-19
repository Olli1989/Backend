import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  id: { type: String },
  username: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
  diary: {type: Object, "default" : {}},
  personalData: {type: Object, "default" : {}}
});

export default mongoose.model("User", userSchema);