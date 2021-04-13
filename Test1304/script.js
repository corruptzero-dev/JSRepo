// var container = document.getElementById("container");
// for( var i=1;i <=9; i++)
// {
//  var el = document.createElement("div");
//   el.className ="card";
//   el.id = "card" + i;
//   el.innerHTML = "First card";
//   container.append(el);
// }

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://reqres.in/api/users?page=2", true);
xhr.onload = function(){
    let users = JSON.parse(xhr.responseText)
    console.log(users);
    var container = document.getElementById("container");
    for( var i=1;i <=5; i++){
        var elem = document.createElement("div");
        elem.className ="card";
        elem.id = "card" + i;
        var inElem = JSON.stringify(users.data[i])
        elem.innerHTML = inElem;
        var kartinka = document.createElement("img")
        kartinka.src=`${elem.avatar}`;
        container.append(elem)
        elem.appendChild(kartinka);
    }
};
xhr.send();


