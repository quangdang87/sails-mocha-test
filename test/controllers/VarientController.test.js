var supertest = require("supertest");
var assert = require("assert");
var url = "http://localhost:3000";

require("../bootstrap.test");

describe("Variant Controller", function () {
  it("get /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/variant")
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
  it("post /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/variant")
      .send({
        name: "REVETRQE  XE",
        type: "Diesel",
        capacity: "1497 cc",
        price: "6.99 Lakh",
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
  it("SEARCH /variant/search", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/variant/search/REVETRQE+XE")
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
  it("UPDATE /variant/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/variant/1")
      .send({
        name: "REVETRQE XM",
        type: "Diesel",
        capacity: "1497 cc",
        price: "7.62 Lakh",
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
  it("DELETE /variant/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/variant/1")
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
  it("DELETE ALL /variant", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/variant")
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
