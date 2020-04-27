const UsersURL = "http://localhost:3000/users"
const DogsURL = "http://localhost:3000/dogs"

// let formData = {
//     dogName: "Rex",
//     dogBreed: "Pit-Bull"
// };

// let configObj = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"
//     },
//     body: JSON.stringify(formData)
// };
// fetch("http://localhost:3000/dogs", configObj)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (object) {
//         console.log(object);
//     })
//     .catch(function (error) {
//         alert("Bad things! Ragnarők!");
//         console.log(error.message);
//     });

function submitData(userName, email) {
    return fetch(UsersURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            name: userName,
            email: email
        })
    })
    .then(resp => resp.json())
    .then(json => document.body.append(json.id))
    .catch(error => document.body.append(error.message))
};

