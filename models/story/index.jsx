import { Schema, model, models } from "mongoose";

const storySchema = new Schema({
  src: String,
  description: String
   
});

const Story = models.Story || model("Story", storySchema);

export default Story;
