let userInfo = document.getElementById('userInfo');
let display = "";

fetch('https://randomuser.me/api/?results=100')
.then(response => response.json())
.then(data => {
    for(let i =0; i < data.results.length; i++){
     display += 
     `<div class="col-lg-3 col-md-6 col-sm-12  mb-3">
            <div class="row">
               <div class="col-lg-12 col-md-5 col-sm-5 text-center">
                <img src="${data.results[i].picture.large}" alt="" id="img" class="rounded-circle shadow borderless my-5" style="width: 200px; height:200px; border: none;">
                </div>
            </div>
            <div class="col-lg-12 col-md-7 col-sm-7 my-auto">
                <h3 id="name"><span>Name:</span>${data.results[i].name.title} ${data.results[i].name.first} ${data.results[i].name.last} </h3>
                <h3 id="address"><span>Address:</span>${data.results[i].location.state} ${data.results[i].location.country}</h3>
                <h3 id="date"><span>DOB:</span>${data.results[i].dob.date} ${data.results[i].dob.age}</h3>
                <h3 id="age"><span>Age:</span>${data.results[i].dob.age}</h3>
                <h3 id="location"><span>Email:</span>${data.results[i].email}</h3>
                <h3 id="number"><span>Number:</span>${data.results[i].phone}</h3>
                <h3 id="password"><span>Password:</span>${data.results[i].login.password}</h3>
            </div>
        </div>`
    }
    userInfo.innerHTML += display;
})

