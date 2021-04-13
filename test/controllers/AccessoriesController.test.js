var supertest = require("supertest");
var assert = require("assert");
var url = "http://localhost:3000";

require("../bootstrap.test");

describe("Accessories Controller", function () {
  it("get /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/accessories")
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
  it("post /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/accessories")
      .send({
        name: "Car Bumper Safety Guard",
        price: 1000,
      })
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
  it("SEARCH /accessories/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/accessories/search/Car+Bumper+Safety+Guard")
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
  it("UPDATE /accessories/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/accessories/1")
      .send({
        name: "Car DVR Camera",
        price: 788,
      })
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
  it("DELETE /accessories/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories/1")
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
  it("DELETE ALL /accessories", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/accessories")
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
