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

  it("tests 12 users", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=12");
      return new Promise(function() {});
    };
    allUsers(testFetch, "?results=12");
  });

  it('tests wrong apiKey', ()=>{
    const testFetch = url =>{
       key === "key"
       assert.equal(allUsers(testFetch), err)
    }
    
  })

  it("tests more than 5000 users returned is out of range", () => {
    const testFetch = url => {
      assert(url === "https://randomuser.me/api/?results=5001");
      return new Promise(function() {});
    };
    allUsers(testFetch, "?results=5001");
  });
})