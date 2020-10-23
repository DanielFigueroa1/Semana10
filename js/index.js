//declaraciones
const IdCandidato = document.getElementById('IdCandidato');
const Nombre = document.getElementById('Nombre');
const Registrar = document.getElementById('Registrar');
const IdUsuario = document.getElementById('IdUsuario');
const Votar = document.getElementById('Votar');
const Candidatos = document.getElementById('Candidatos');
const Votaciones = document.getElementById('Votaciones');

const database = firebase.database();

//funciones
registrarBoton = () => {

    let i = IdCandidato.value;
    let n = Nombre.value;
    
    let registroUsuario ={
        IdCandidato: i,
        Nombre: n,
    };

    let json = JSON.stringify(registroUsuario);

    console.log(registroUsuario);

    alert('candidato registrado'/*+i+""+n*/);

    database.ref('users/'+registroUsuario.IdCandidato).set(registroUsuario);

    }

    votarBoton = () => {
        let i = IdCandidato.value;
        let u = IdUsuario.value;

        if (u !== id){
            alert('ID no coincide con ningun candidato');
            return;
        }

        if(u === ''){
            alert('ID esta vacio');
            return;
        }
    
    }

    CandidatosBoton = () => {
        let i = IdCandidato.value;
        let n = Nombre.value;
        
        let registroUsuario ={
            IdCandidato: i,
            Nombre: n,
        };
        alert();


    }

    VotacionesBoton = () => {
        
    alert('click');
    }

Registrar.addEventListener('click', registrarBoton);
Votar.addEventListener('click', votarBoton);
Candidatos.addEventListener('click', CandidatosBoton);
Votaciones.addEventListener('click', VotacionesBoton);

database.ref('users').on('value', function(data){
    //console.log(data.val());
    data.forEach (
        function(user){
        let = id = user.key;
        let = nombreCandidato = user.val();
        console.log(id);
        console.log(nombreCandidato.Nombre);
        }
    );
} );