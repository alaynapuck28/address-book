function allUsers(fetch, endpoint) {
  let multipleArray = null;
  fetch("https://randomuser.me/api/?results=12" + endpoint)
    .then(response => response.json())
    .then(data => {
      multipleArray = data.results;
      multipleArray.map(person => {
        console.log(person);
        let createAllLi = document.createElement("li");
        let allContactsList = document.getElementById("allContacts");
        let allImage = document.createElement("img");

        let button = document.createElement("button");
        button.id = "more info";
        let text = document.createTextNode("user info");

        //button function to get even more info about each user
        button.addEventListener("click", e => {
          let textBox = document.createElement("p");
          let pText = document.createTextNode(
            "Cell: " +
              person.cell +
              " " +
              "Age: " +
              person.dob.age +
              " Email: " +
              person.email
          );
          textBox.appendChild(pText);
          createAllLi.appendChild(textBox);
        });

        allImage.src = person.picture.large;
        createAllLi.appendChild(allImage);
        createAllLi.appendChild(
          document.createTextNode(person.name.first + " " + person.name.last)
        );
        button.appendChild(text);
        createAllLi.appendChild(button);

        allContactsList.append(createAllLi);
      });

      console.log(multipleArray);
    });
}

document.getElementById("allContacts").innerHTML = " ";


function get() {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results;
      const name = user[0].name.first;
      const imgUrl = user[0].picture.large;
      // const users= [];
      const userDiv = document.createElement("div");
      const h3 = document.createElement("h3");
      const img = document.createElement("img");
      img.src = imgUrl;

      h3.textContent = name;
      userDiv.appendChild(h3);
      userDiv.appendChild(img);
      usersElement.appendChild(userDiv);
      userDiv.id = "individualUser";
    });
}
let usersElement = document.querySelector("#users");

window.onload = function() {
  allUsers();
  get();
}

  // .catch(oopsThisIsAnError =>
  //   console.log("oops, looks like we got an error: ", oopsThisIsAnError)
  // )
  // .finally(() => console.log("finally, This function always runs...")); // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end

