import cruz from '../../assets/img/cruz.png'
import { Link } from 'react-router-dom'

function Navbar() {


  return (
    <>
     <div className='w-full bg-blue-200 text-white flex justify-center py-4'>
          <img src={cruz} alt="cruz de farmacia" style={{width: '50px'}}/>
          <div className="container flex justify-between text-lg">
            <Link to='/' className='text-2xl font-bold'>Farmacia</Link>
            
            <div className='flex gap-10'>
              <div className='cursor-pointer hover:text-red-500 font-bold'>Produtos</div>
              <Link to='/categorias' className='cursor-pointer hover:text-red-500 font-bold'>Categorias</Link>
              <Link to='/cadastroCategoria' className='cursor-pointer hover:text-red-500 font-bold'>Cadastrar Categoria</Link>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar