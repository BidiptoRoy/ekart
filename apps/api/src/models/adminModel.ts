import mongoose from "mongoose";
// import validator from "validator";

const adminSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "admin must have a name"],
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  passwordConfirm: {
    type: String,
    required: [true, "confirm your password"],
  },
});

// creating a test Admin

const Admin = mongoose.model("Admin", adminSchema);

// const testAdmin = new Admin({
//   name: "Bidipto Roy",
//   email: "bidipto@gmail.com",
//   password: "pass1234",
//   passwordConfirm: "pass1234",
// });

// testAdmin
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

export default Admin;
