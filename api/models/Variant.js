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
    type: {
      type: "string",
      enum: ["Petrol", "Diesel", "Hybrid", "Automatic"],
    },
    capacity: {
      type: "integer",
    },
    price: {
      type: "integer",
    },
    cars: {
      collection: "cars",
      via: "variants",
    },
  },
};
