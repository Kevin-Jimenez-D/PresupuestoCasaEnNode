/*const traerMockApi = async()=>{
    let mockapi = await (await fetch("https://6509e7e7f6553137159c3ae5.mockapi.io/presupuestoCasa")).json();
    //console.log(mockapi);
    let config=
    {
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(mockapi)
    }

    let res = await (await fetch("http://localhost:3000/libros", config)).json();
    console.log(res);
}

traerMockApi();


const actualizar = async(Id)=>{
    let config=
    {
        method:"PUT",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({
            caja:"ingreso",
            valor: 0,
            id : Id
        })
    }
    let res = await (await fetch(`http://localhost:3000/libros`, config)).json();
    console.log(res);
}
actualizar(23);


const eliminar = async(id)=>{
    let config=
    {
        method:"DELETE",
    }
    let res = await (await fetch(`http://localhost:3000/libros/${id}`, config)).json();
    console.log(res);
}

eliminar(3);

*/

/*
const mostrarLibros=async()=>{
    let res = await (await fetch(`http://localhost:3000/libros`)).json();
    console.log(res[0][0]["id"])    //Segun esta lógica, el primer cero me muestra todos los datos (debe ser fijo)
                                    //El segundo cero me muestra de todos esos datos la posicion "del vector", inicia desde cero
                                    //y el tercer dato accedo al objeto que deseo
                                    //Con esta lógica usar todos los métodos
}

mostrarLibros()
*/

let myTabla=document.querySelector("#myData");  //Va a apuntar a la primera tabla que se llena en el HTML

//Saldo total
// Crear dos arrays para almacenar los valores de ingreso y egreso

let showTotal=document.querySelector("#saldoTotal");    //Apunta a una tabla en el HTML para evidenciar el saldo total
let valoresIngreso = [];
let valoresEgreso = [];

let datosID=[];     //Esto es para guardar el ID de cada uno de los datos
let datosValor=[];  //Esto es para guardar los valores de dinero
let datosCaja=[];   //Esto es para guardar si es ingreso o egreso

addEventListener("DOMContentLoaded", async()=>{
    let res = await (await fetch("https://6509e7e7f6553137159c3ae5.mockapi.io/presupuestoCasa")).json();
    //console.log(res);            //Aca guarda en un array lo que trae del HTML, como en forma de diccionario
    //extrae cada uno de los elementos con el for y los va agregando al HTML
    console.log(res);
    for(let i=0; i< res.length ; i++){
        myTabla.insertAdjacentHTML("beforeend", `
        <tr>
            <td>${res[i].id}</td>
            <td>${res[i].valor}</td>
            <td>${res[i].caja}</td>       
        </tr>
        `);

        datosID.push(res[i].id)    //Con esto agrego todos los id en este array
        //BUSCARV
        datosValor.push(res[i].valor);  //Los guardo en un array para luego utilizarlos, en este caso el dinero
        datosCaja.push(res[i].caja);    //LOs guardo en un array para luego utilizarlos, en este caso ingreso o egreso
        //BUSCARV
    }

    
    //Saldo total 
    
        //lo hace bien con el boton actualizar valores
        // Iterar a través de los datos y clasificarlos en los arrays correspondientes
        //Los valores de ingreso los guarda en el array ingreso, lo mismo con lo de los egresos
        for (let i = 0; i < datosCaja.length; i++) {
            if (datosCaja[i] === 'ingreso') {
                valoresIngreso.push(datosValor[i]);
            } else if (datosCaja[i] === 'egreso') {
                valoresEgreso.push(datosValor[i]);
            }
        }
        //.reduce() es un método de los arrays en JavaScript que se utiliza para reducir un array a un solo valor
        //En esta función, total representa el acumulador de la suma
        //valor representa el valor actual del elemento que está siendo procesado.
        //total + valor simplemente suma el valor actual (valor) al acumulador (total) en cada iteración.
        //es el valor inicial del acumulador, que en este caso es 0. Esto significa que la suma comenzará desde cero.

        // Sumar todos los valores de ingreso
        let sumaValoresIngreso = valoresIngreso.reduce((total, valor) => total + valor, 0);

        // Sumar todos los valores de egreso
        let sumaValoresEgreso = valoresEgreso.reduce((total, valor) => total + valor, 0);

        // Ahora, tienes dos arrays: valoresIngreso y valoresEgreso, que contienen los valores según su tipo de caja
        //console.log('Valores de Ingreso:', valoresIngreso);
        //console.log('Valores de Egreso:', valoresEgreso);

        // Imprimir las sumas
        //console.log('Suma de Valores de Ingreso:', sumaValoresIngreso);
        //console.log('Suma de Valores de Egreso:', sumaValoresEgreso);

    //Saldo total


    //Saldo total
    showTotal.innerHTML = `
    <tr>
        <td>${sumaValoresIngreso}</td>
        <td>${sumaValoresEgreso}</td>
        <td>${sumaValoresIngreso-sumaValoresEgreso}</td>
    </tr>
    `;
    
    //Saldo total
    

    //console.log(datosID)           //y acá los visualizo

})


let enviarJsonServer= document.querySelector("#enviarJsonServer");

enviarJsonServer.addEventListener("submit", async(e)=>{
    e.preventDefault();
    let mockapi = await (await fetch("https://6509e7e7f6553137159c3ae5.mockapi.io/presupuestoCasa")).json();
    console.log(mockapi.length);
    
    for (let index = 0; index < mockapi.length; index++) 
    {
        let config=
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(mockapi[index])
        }

        let res = await (await fetch(`http://localhost:3000/libros`, config)).json();
        
    }
    

    /*
    let config=
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(mockapi)
        }

        let res = await (await fetch(`http://localhost:3000/libros`, config)).json();

    let libros = await (await fetch(`http://localhost:3000/libros/1`)).json();
    
    let config2=
        {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(libros[0])
        }

        let casa = await (await fetch(`http://localhost:3000/casa`, config2)).json();
    */
})

