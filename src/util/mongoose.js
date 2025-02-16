module.exports = {
  multibleMongooseToObject: (mongooseArray) =>
    mongooseArray.map((mongoose) => mongoose.toObject()),
  mongooseToObject: (mongooseArray) =>
    mongooseArray.map((mongoose) => mongoose.toObject()),
};
