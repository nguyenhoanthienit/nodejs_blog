const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema(
  {
    name: { type: String, default: "Default course" },
    description: {
      type: String,
      default:
        "Lorem Ipsum is simply dummy text of the printing of Lorem Ipsum.",
    },
    image: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3V0ZSUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
    },
    videoId: { type: String, default: "Rso7JCzJ8ms" },
    slug: { type: String, slug: "name", unique: true },
  },
  {
    timestamps: true,
  }
);

// add plugin
mongoose.plugin(slug);
Course.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("Course", Course);
// => "Course" will be converted auto -> courses (plural, lower case) -> to be the same in Mongo
