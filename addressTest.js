const assert = require("assert");
const key = "a3957b"

function allUsers(fetch, endpoint) {
    let multipleArray = null;
    fetch("https://randomuser.me/api/" + endpoint)
      .then(response => response.json())
      .then(data => {
        multipleArray = data.results;})
      .catch(err => console.log(`Error,  ${err}`))};


describe("allUsers", () => {
  it("tests fetch and user is returned", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/");
      return new Promise(function() {});
    };
    allUsers(testFetch);
  });
  it("tests 12 users", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=12");
      return new Promise(function() {});
    };
    allUsers(testFetch, "?results=12");
  });

  it('test wrong apiKey', ()=>{
    const testFetch = url =>{
       key === "a3957b"
       assert.equal(allUsers(testFetch), err)
    }
    
  })
  it('test for correct apiKey', ()=>{
    const testFetch = url =>{
       key === "a3957b"
       assert.equal(allUsers(testFetch))
    }
    
  })
  

  it("tests more 5000 users returned is out of range", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=5001");
      return new Promise(function() {});
    };
    allUsers(testFetch, "?results=5001");
  });
});