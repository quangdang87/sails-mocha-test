module.exports = {
  attributes: {
    id: {
      type: "integer",
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: "string",
      required: true,
      unique: false,
    },
    cars: {
      collection: "Cars",
      via: "manufacturer",
    },
  },
};
