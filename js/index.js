//declaraciones

const IdCandidato = document.getElementById('IdCandidato'); //input
const Nombre = document.getElementById('Nombre'); //input
const Registrar = document.getElementById('Registrar'); //boton
const IdUsuario = document.getElementById('IdUsuario'); //input
const Votar = document.getElementById('Votar'); //boton
const Candidatos = document.getElementById('Candidatos'); //boton
const Votaciones = document.getElementById('Votaciones'); //boton

const database = firebase.database();

//funciones

registrarBoton = () => {

    let i = IdCandidato.value;
    let n = Nombre.value;
    
    let registroUsuario ={
        IdCandidato: i,
        Nombre: n,
    };

    //let json = JSON.stringify(registroUsuario);

    console.log(registroUsuario);

    alert('candidato registrado'/*+i+""+n*/);

    database.ref('users').push().set(registroUsuario); //escribe los registros en database

    }

    votarBoton = () => { //boton de votar segun id
      /*  let i = IdCandidato.value;
        let u = IdUsuario.value;

        if (u !== id){
            alert('ID no coincide con ningun candidato');
            return;
        }

        if(u === ''){
            alert('ID esta vacio');
            return;
        }
    */
   let idChequada = IdCandidato.value;
   let votarCandidato = {
       idVotoCandidato:Math.random(),
       id:idChequada
   }

   let votos;
   database.ref('IdCandidato').on('value',function (data){
   data.forEach(
       function (votosCandidatos) {
           let  numeroVotos= votosCandidatos.val();
           let  id= numeroVotos.id;

           if ( id === idChequada) {
           v =voto.v;
           }
       }
   )
   });


}

    

    CandidatosBoton = () => { //ver candidatos
        
        /*let i = IdCandidato.value;
        let n = Nombre.value;
        
        let registroUsuario ={
            IdCandidato: i,
            Nombre: n,
        };
        alert();*/

        let candidatosRegistrados = [];
        database.ref('users').on('value',function(data){
            data.forEach(
                function(users){
                    let definicion = users.val();
                    candidatosRegistrados.push(definicion.IdCandidato+" "+definicion.Nombre+"");
                }
            )
        })
        alert(candidatosRegistrados);

    }

    VotacionesBoton = () => { //ver los votos
    
    }

    database.ref('users').on('value', function(data){
        //console.log(data.val());
        data.forEach (
            function(user){
            let = id = user.key;
            let = IdCandidatos = user.val();
            let = nombreCandidato = user.val();
            console.log(id);
            console.log(IdCandidatos.IdCandidato);
            console.log(nombreCandidato.Nombre);
            }
        );
    } );


Registrar.addEventListener('click', registrarBoton);
Votar.addEventListener('click', votarBoton);
Candidatos.addEventListener('click', CandidatosBoton);
Votaciones.addEventListener('click', VotacionesBoton);

