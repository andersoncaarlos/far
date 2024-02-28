import cruz from '../../assets/img/cruz.png'

function Navbar() {
 
  

  return (
    <>
     <div className='w-full bg-blue-200 text-white flex justify-center py-4'>
          <img src={cruz} alt="cruz de farmacia" style={{width: '50px'}}/>
          <div className="container flex justify-between text-lg">
            <div className='text-2xl font-bold'>Farmacia</div>
            <div className='flex gap-10'>
              <div className='cursor-pointer hover:text-red-500 font-bold'>Produtos</div>
              <div className='cursor-pointer hover:text-red-500 font-bold'>Categoria</div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Navbar