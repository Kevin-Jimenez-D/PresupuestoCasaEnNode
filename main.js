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

const mostrarLibros=async()=>{
    let res = await (await fetch(`http://localhost:3000/libros`)).json();
    console.log(res[0][0]["id"])    //Segun esta lógica, el primer cero me muestra todos los datos (debe ser fijo)
                                    //El segundo cero me muestra de todos esos datos la posicion "del vector", inicia desde cero
                                    //y el tercer dato accedo al objeto que deseo
                                    //Con esta lógica usar todos los métodos
}

mostrarLibros()