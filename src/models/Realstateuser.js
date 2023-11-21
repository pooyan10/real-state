import { Schema, model, models } from "mongoose";

const realstateuserSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "USER",
  },
  published: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
});

const Realstateuser =
  models.Realstateuser || model("Realstateuser", realstateuserSchema);

export default Realstateuser;
