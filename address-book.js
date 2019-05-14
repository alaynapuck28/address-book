

function get(){
    fetch("https://randomuser.me/api/")
      .then( thisIsTheResponseFromTheAPI => thisIsTheResponseFromTheAPI.json())
      .then( data => console.log("Array of data: ", data))
      .catch( oopsThisIsAnError => console.log("oops, looks like we got an error: ", oopsThisIsAnError))
      .finally( ()=> console.log("finally, This function always runs...")) // Whether or not there's an error or success, this will happen such as stopping a loading wheel on the front end
  }
  console.log(data)