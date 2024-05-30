// URL de la API REST
const apiUrl = 'https://api.nasa.gov/EPIC/api/natural/images?api_key=V04yJv6sOrac7SOljyPAFl9MOr7P6Da853rwFhYc';

// Función para obtener los datos de la API
function obtenerUsuarios() {
    // Llamada a la API utilizando fetch()
    fetch(apiUrl)
        .then(response => {
            // Verificar si la solicitud fue exitosa (código de estado 200)
            if (response.ok) {
                // Convertir la respuesta a formato JSON
                return response.json();
            }
            // En caso de error, lanzar una excepción
            throw new Error('Error al obtener los usuarios');
        })
        .then(data => {
            // Manejar los datos obtenidos de la API
            console.log(data);
            let elementos=document.getElementById('idTablaDocente2')
            elementos.innerHTML = data;
            console.table(data)
            // Por ejemplo, podrías iterar sobre los usuarios y mostrarlos en la página web
            data.forEach(usuario => {
                console.log(usuario.nombre);
            });
        })
        .catch(error => {
            // Manejar cualquier error que pueda ocurrir durante la solicitud
            console.error('Hubo un error:', error);
        });
}

// Llamar a la función para obtener los usuarios
obtenerUsuarios();