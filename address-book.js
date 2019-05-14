let usersElement= document.querySelector("#users");



  function get(){
    fetch("https://randomuser.me/api/?results=5")
      .then( response => response.json())
      .then( data => {
        const user = data.results;
        const name=user[0].name.first;
        const imgUrl= user[0].picture.medium;
        // const users= [];
        const userDiv= document.createElement('div');
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        img.src=imgUrl;

        h3.textContent= name;
        userDiv.appendChild(h3);
        userDiv.appendChild(img);
        usersElement.appendChild(userDiv);
      })
    }

    window.onload =function(){
      get();
    };
      
  
    
      // .catch( oopsThisIsAnError => console.log("oops, looks like we got an error: ", oopsThisIsAnError))
      // .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
  
     

 
  