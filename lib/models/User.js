import { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
  {
    address: {
      type: String,
      required: true,
      unique: true,
      maxLength: 50,
    },
  },
  {
    timestamps: true,
  }
);

//if not exists than create a table but if exists use schema
export default models.User || model("User", UserSchema);
