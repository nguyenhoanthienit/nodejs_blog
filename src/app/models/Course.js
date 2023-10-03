const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");
const mongooseDelete = require("mongoose-delete");
const autoIncrement = require("@alec016/mongoose-autoincrement");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const CourseSchema = new Schema(
  {
    // _id: { type: Number },
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
    _id: false,
    timestamps: true,
  }
);

// query helper for sortable
CourseSchema.query.sortable = function (req) {
  if (req.query.hasOwnProperty("_sort")) {
    const invalidType = ["asc", "desc"].includes(req.query.type);
    return this.sort({
      [req.query.column]: invalidType ? req.query.type : "asc",
    });
  }
  return this;
};

// add plugin
autoIncrement.initialize(mongoose.connection);
mongoose.plugin(slug);
CourseSchema.plugin(autoIncrement.plugin, { startAt: 1, model: "Course" });
CourseSchema.plugin(mongooseDelete, { overrideMethods: "all" });

module.exports = mongoose.model("Course", CourseSchema);
// => "Course" will be converted auto -> courses (plural, lower case) -> to be the same in Mongo
