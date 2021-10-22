
// ejercicio 1 //agregar las sig horas
traumatologia.push(
    {hora: '09:00' , especialista: 'RENE POBLETE' , paciente: 'ANA GELLONA' , rut: '13123329-7', previsio: 'ISAPRE'},
    {hora: '09:30' , especialista: 'MARIA SOLAR' , paciente: 'RAMIRO ANDRADE' , rut: '12221451-K', previsio: 'FONASA'},
    {hora: '10:00' , especialista: 'RAUL LOYOLA' , paciente: 'CARMEN ISLA' , rut: '10112348-3', previsio: 'ISAPRE'},
    {hora: '10:30' , especialista: 'ANTONIO LARENAS' , paciente: 'PABLO LOAYZA' , rut: '13453234-1', previsio: 'ISAPRE'},
    {hora: '12:00' , especialista: 'MATIAS ARAVENA' , paciente: 'SUSANA POBLETE' , rut: '14345656-6', previsio: 'FONASA'},)

//ejercicio 2
radiologia.pop()//elimina el ultimo
radiologia.shift()//elimina el primero
console.log(radiologia)

//ejercicio 3
document.write("<h3>Lista de consultas medicas Dental</h3>")
dental.forEach(function(dental){
    return document.write(`
    <p>${dental.hora} - ${dental.especialista} - ${dental.paciente} - ${dental.rut} - ${dental.prevision}<p/>`)
})

//ejercicio 4 // listado de nombres pacientes
document.write(`
<h3>Listado total de pacientes del centro</h3
<br>
`
)
const listaPacientes = radiologia.concat(traumatologia,dental)
listaPacientes.forEach(listaPacientes => {
    return document.write(`<p>${listaPacientes.paciente}</p>`)

});

//ejercicio 5 //filtrar isapre dental
document.write(`
<h3>Consultas medicas dental (ISAPRE)</h3
`
)

const isapreDental = dental.filter(function(dental){
    if(dental.prevision == 'ISAPRE'){
       document.write( `<p>${dental.paciente} - ${dental.prevision}</p>`)
        
    } 
})

//ejercicio 6 //filtrar fonada traumatologia
document.write(`<h3>Consultas medicas traumatologia (FONASA)</h3>`)
const fonasaTrauma = traumatologia.filter(function(traumatologia){
     if (traumatologia.prevision == "FONASA"){
         document.write(`<p>${traumatologia.paciente} - ${traumatologia.prevision}</p>`)
     }
})




