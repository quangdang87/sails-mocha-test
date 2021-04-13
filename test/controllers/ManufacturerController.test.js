var supertest = require("supertest");
var assert = require("assert");
var url = "http://localhost:3000";

require("../bootstrap.test");

describe("Manufacturer Controller", function () {
  it("get /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/manufacturer")
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
  it("post /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/manufacturer")
      .send({
        name: "Tata",
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
  it("SEARCH /manufacturer/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/manufacturer/1")
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
  it("UPDATE /manufacturer/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/manufacturer/1")
      .send({
        name: "Hyundai",
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
  it("DELETE /manufacturer/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/manufacturer/1")
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
  it("DELETE ALL /manufacturer", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/manufacturer")
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
