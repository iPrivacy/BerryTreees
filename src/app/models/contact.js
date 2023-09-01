import mongoose, { Schema } from "mongoose"


const contactSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Minimum of 2 characters required"],
    maxLength: [15, "Must be 15 characters or less"],
    match: [
      /^[A-Za-z]+$/g,
      "No digits or special charaters allowed only aplhabets",
    ],
  },
  lastName: {
    type: String,
    required: [true, "Name is required."],
    trim: true,
    minLength: [2, "Minimum of 2 characters required"],
    maxLength: [15, "Must be 15 characters or less"],
    match: [
      /^[A-Za-z]+$/g,
      "No digits or special charaters allowed only aplhabets",
    ],
  },
  email: {
    type: String,
    required: [true, "Email is required."],
    match: [
      /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      "Enter a valid email address e.g john@doe.com",
    ],
  },
  date: {
    type: Date,
    default: Date.now
  },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact",contactSchema);
export default Contact;
