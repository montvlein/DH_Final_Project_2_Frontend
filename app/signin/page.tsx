'use client'
import Logo from '@/components/registro/Logo'

const registro: React.FC = () => {

  const fetchData = async () => {

    try {
      const response = await fetch('/api/users/read');

      if (response.status === 200) {
        const data = await response.json();
        console.log("Lista de usuarios", data)
      } else {
        console.error('Error al obtener la lista de usuarios');
      }
    } catch (error) {
      console.error('Error de red:', error);
    }
  };

  return (
    <div className='flex text-gray-900'>
      <Logo />
      <div className='flex flex-col gap-4'>
        <p>INICIAR SESION</p>
        <button onClick={fetchData} className='p-4 rounded bg-rose-300'>Consologear usuarios</button>
      </div>
    </div>
  )
}
export default registro
