// const usersWindow = window.open(    
//                     "https://www.google.com/?hl=es",//ruta
//                     "_blank", //para que la abra en la misma
//                     "width=650px,height=450px",//medidas 
//                     "top=300px, left=500px"  
//                 );


// document.getElementById("aSendMail").onclick = function () {
//     const usersWindow = window.open("src/email.html","_blank", "width=650px,height=550px,top=200px, left=600px")
// }


/**
 * 
 */
// var usersWindow = null;

// document.getElementById("aSendMail").onclick = function () {
//     if (!usersWindow)
//         usersWindow = window.open("src/email.html","_blank", "width=650px,height=850px , top= 500px,left = 600px");
//     else
//         alert("Ya tienes abierta la ventana");
// }

/**
 * 
 */
        // var usersWindow = null;

        // document.getElementById("aSendMail").onclick = function () {
        //     if ((!usersWindow) || (usersWindow.closed))
        //         usersWindow = window.open("src/email.html","_blank", "width=350,height=450");
        //     else {
        //         alert("Ya tienes la ventana email abierta");
        //         usersWindow.focus();
        //     }
        // }

        // document.getElementById("aMoveWindow").onclick = function() {
        //     if (usersWindow) {
        //         usersWindow.moveBy(500, 300);
        //         usersWindow.focus();
        //     }
        //     else {
        //         alert("La ventana ya se cerró");
        //     }

        // }

/**
 * 
 */
var usersWindow = null;
const info = document.getElementById("info");
const login = document.getElementById("login");
const mail = document.getElementById("mail");

document.getElementById("aSendMail").onclick = function () {
    try {
        if (login.value == "")
            throw Error ("Nombre está vacío!");
        if (document.getElementById("pass").value == "")
            throw Error ("Password está vacío!");
        if (mail.value == "")
            throw Error ("Email está vacío!");

        if ((!usersWindow) || (usersWindow.closed))
            usersWindow = window.open("src/email.html","_blank", "width=650,height=850");
        else {
            info = "Ya tienes la ventana email abierta";
            usersWindow.focus();
        }

        // Pasamos Login e email:
        usersWindow.onload = function () {
            usersWindow.document.getElementById("nombre").value = login.value;
            usersWindow.document.getElementById("mail").value = mail.value;
        }
        

    }
    catch (err) {
        info.innerHTML = "<b style='color:red;'>" + err + "</b>";
        setTimeout(function () { info.innerHTML = ""}, 3000);
    }
}

document.getElementById("aMoveWindow").onclick = function() {
    if (usersWindow) {
        usersWindow.moveBy(500, 300);
        usersWindow.focus();
    }
    else {
        alert("La ventana ya se cerró");
    }

}






