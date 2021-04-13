var expect = require("chai").expect;
var Manufacturer = require("../../api/models/Manufacturer");

describe("Manufacturer Models", function () {
  it("See what inside Manufacturer", function (done) {
    expect(Manufacturer).to.eql({
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
    });
    done();
  });
});
