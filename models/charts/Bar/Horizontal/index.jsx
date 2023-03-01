import { Schema, model, models } from "mongoose";

const horizontalBarSchema = new Schema({
    labels:{
        type : Array,
        required : true,
    },
    data:{
        type : Object,
        required : true
    }
})

const HorizontalBar = models.HorizontalBar || model("HorizontalBar", horizontalBarSchema)

export default HorizontalBar


