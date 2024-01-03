import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes,setPaciente,eliminandoPaciente}) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-auto">
      {pacientes && pacientes.length ?(
      <>
          <h2 className="font-black text-center text-3xl ">Listado Pacientes</h2>
          <p className="mt-5  text-center text-xl">Administra tus {''}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {pacientes.map((paciente)=>
              <Paciente 
              key={paciente.id}
              paciente={paciente} 
              setPaciente={setPaciente}
              eliminandoPaciente={eliminandoPaciente}
              />
          )}
      </>
      ):
      <>
       <h2 className="font-black text-center text-3xl ">No Hay Pacientes</h2>
        <p className="mt-5  text-center text-xl">Comienza agregando pacientes {''}
         <span className="text-indigo-600 font-bold">y apareceran en este lugar</span>
        </p>
      </>
      }
     
      

    </div>
  )
}

export default ListadoPacientes
