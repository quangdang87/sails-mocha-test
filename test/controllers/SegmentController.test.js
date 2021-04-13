var supertest = require("supertest");
var assert = require("assert");
var url = "http://localhost:3000";

require("../bootstrap.test");

describe("Segment Controller", function () {
  it("get /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/segment")
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
  it("post /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .post("/segment")
      .send({name: "SEDAN"})
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
  it("SEARCH /segment/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .get("/segment/1")
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
  it("UPDATE /segment/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .put("/segment/1")
      .send({name: "SUV"})
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
  it("DELETE /segment/1", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/segment/1")
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
  it("DELETE ALL /segment", function (done) {
    var agent = supertest.agent(sails.hooks.http.app);
    agent
      .delete("/segment")
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
