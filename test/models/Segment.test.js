var expect = require("chai").expect;
var Segment = require("../../api/models/Segment");

describe("Segment Models", function () {
  it("See what inside segment", function (done) {
    expect(Segment).to.eql({
      attributes: {
        id: {
          type: "integer",
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: "string",
          required: true,
          unique: true,
        },
        cars: {
          collection: "Cars",
          via: "segment",
        },
      },
    });
    done();
  });
});
