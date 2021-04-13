var supertest = require("supertest");
var assert = require("assert");
var url = "http://localhost:8000/";
var request = require("supertest")(url);
var manufacturers = require("../fixtures/manufacturer.json");
var varients = require("../fixtures/Varient.json");
var accessories = require("../fixtures/Accessories.json");
var segments = require("../fixtures/segment.json");
require("../bootstrap.test");

describe("Car Controller", function () {
  it("get /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/car")
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          console.log(result.body);
          result.body.length.should.be.aboveOrEqual(0);
          done();
        }
      });
  });

  it("SEARCH /car/search", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/car/search/Tata+Nexon")
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          console.log(result.body);
          done();
        }
      });
  });
  it("UPDATE /car/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/car/1")
      .send({
        name: "Honda City",
        segment: 4,
        description: "This is a dummy text",
        manufacturer: 3,
        variants: [7, 8, 9, 10],
        accessories: [13, 15, 16, 18],
      })
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          console.log(result.body);
          done();
        }
      });
  });
  it("DELETE /car/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car/1")
      .send()
      .expect(404)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          console.log(result.body);
          done();
        }
      });
  });
  it("DELETE ALL /car", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/car")
      .send()
      .expect(200)
      .end(function (err, result) {
        if (err) {
          done(err);
        } else {
          console.log(result.body);
          done();
        }
      });
  });
});
