const info = document.getElementById("info");

info.innerHTML = `Número de formularios en la app: ${document.forms.length}`

for (let radioElement of document.getElementsByName("edades"))
    if (radioElement.checked)
        info.innerHTML = `radio pulsado: ${radioElement.value}`




/***************************************************************************** */
document.getElementById("aForm1").onclick = function () {

    const primerForm = document.forms.form1;

    primerForm.elements[0].placeholder = "Campo actualmente desabilitado";
    primerForm.elements[0].disabled = "true";

    console.log(`Primer formulario tiene ${primerForm.elements.length} elementos`)
    console.log(`Login introducido: ${primerForm.elements[0].value}`)

    
}

function checkRadioEdades(e) {
    for (let radioElement of document.getElementsByName("edades"))
        if (radioElement.checked) {
            info.innerHTML = `Valor del radio pulsado ${radioElement.value}`
            break;
        }
}