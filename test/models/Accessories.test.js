var expect = require("chai").expect;
var Accessories = require("../../api/models/Accessories");

describe("Accessories Models", function () {
  it("See what inside accessories", function (done) {
    expect(Accessories).to.eql({
      attributes: {
        id: {type: "integer", autoIncrement: true, primaryKey: true},
        name: {type: "string", required: true, unique: true},
        price: {type: "integer"},
        cars: {collection: "cars", via: "accessories"},
      },
    });
    done();
  });
});
