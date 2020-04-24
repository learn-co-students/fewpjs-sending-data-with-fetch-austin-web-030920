// Add your code here

configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      dogName: "Byron",
      dogBreed: "Poodle"
    })
  };

console.log(configurationObject)





function submitData(userName, userEmail) {

    let configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        
        body: JSON.stringify({ name: userName, email: userEmail })
    };

    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        console.log(json.id)
        document.getElementsByTagName("body")[0].textContent = json.id
        
    })
    .catch(function(error) {
        document.getElementsByTagName("body")[0].textContent = error.message
    });

    
}