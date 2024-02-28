import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="fixed bottom-0 w-full bg-blue-200 p-2 text-center text-blue-500">
          <div className="container flex flex-col items-center py-4">
            <p className='text-lg'>Acesse nossas redes sociais: </p>
            <div className='flex gap-3'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer