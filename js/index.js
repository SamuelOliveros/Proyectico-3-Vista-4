import Cl_oficina from "./Cl_oficina.js";
import Cl_prestamo from "./Cl_prestamo.js";
import dt_prestamos from "./data.js";

const ofici = new Cl_oficina();

dt_prestamos.forEach((pres) => 
ofici.agregarPrestamo(
    new Cl_prestamo(pres.cliente,pres.codigo,pres.prestamo,pres.meses)
)    
);

let MontoFinal = (ofici,salida) => {
    let montfin = ofici.MontoFinal();
    salida.innerHTML =`El monto final disponible para prestamo es de:${montfin}; `
};

let DosMeses = (ofici,salida) => {
    let dosme = ofici.DosMeses();
    salida.innerHTML=`El cliente que pidio un prestamo de dos meses fue:${dosme};`
};

let PrestMin = (ofici,salida) => {
    let prestmi = ofici.PrestMin();
    salida.innerHTML=`El prestamo minimo se realizo al cliente:${prestmi};`
};

let agregarPrestamo = (ofici) =>{
    let cliente = prompt("Ingresa el nombre del cliente:");
    let codigo  = prompt("Ingresa el codigo del cliente:");
    let prestamo = prompt("Ingresa el monto del prestamo:");
    let meses = prompt("Ingresa los meses del prestamo:");
    ofici.agregarPrestamo(new Cl_prestamo(cliente,codigo,prestamo,meses));

};

let eliminarArticulo = (ofici) => {
    let codigo = prompt("Ingrese el codigo del prestamo a eliminar:");
    if (ofici.eliminarArticulo(codigo)) alert(`Se eliminó el prestamo ${codigo}`);
    else alert(`No existe el codigo ${codigo}`);
};


let listarArticulos = (ofici, salida) => {
    salida.innerHTML = "";
    ofici.prestamos.forEach((pres) => {
      salida.innerHTML += `<br>${pres.cliente} ${pres.codigo} ${
        pres.prestamo
      } ${pres.meses}`;
    });
  };
  
  let salida1 = document.getElementById("salida1"),
    salida2 = document.getElementById("salida2"),
    opciones = document.getElementById("opciones");
  
  salida1.innerHTML = `<br>Seleccione una opción:
    <br>1= Agregar artículo
    <br>2= Monto Final disponible para prestamos
    <br>3= Cliente que pidio prestamo por dos meses
    <br>4= Cliente que pidio el menor prestamo
    <br>5= Listar artículos
    <br>6= Eliminar artículo`;
  
  opciones.onclick = () => {
    let opcion = +prompt("Seleccione su opción:");
    switch (opcion) {
      case 1:
        agregarPrestamo(ofici);
        break;
      case 2:
        MontoFinal(ofici, salida2);
        break;
      case 3:
        DosMeses(ofici, salida2);
        break;
      case 4:
        PrestMin(ofici, salida2);
        break;
      case 5:
        listarArticulos(ofici, salida2);
        break;
      case 6:
        eliminarArticulo(ofici);
        break;
    }
  };
