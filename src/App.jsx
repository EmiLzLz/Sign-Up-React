import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='min-h-screen flex flex-col text-white'>
      <main className='container mx-auto px-6 pt-16 flex-1 text-center'>
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
        <h1 className='text-3xl md:text-6xl lg:text-8xl font-black uppercase mb-8'>
          Videogame Store
        </h1>

        <div className='text-lg md:text-2x1 lg:text-3xl py-2 px-4 md:py-4 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 w-fit mx-auto mb-8 rounded-full'>
         +500,000 customers
        </div>

        <form action='' target='_blank'>
          <div className='flex flex-col md:flex-row justify-center mb-4'>
            <input placeholder='Your email adress' type="email" className='text-2xl placeholder:text-gra-400 placeholder:italic py-4 px-6 md:px-10 lg:py-6 lg:px-12 bg-white bg-opacity-10 focus:bg-opacity-20 duration-150 rounded-full md:rounded-tr-none md:rounded-br-none mb-4 md:mb-0 outline-none'/>

            <input type='submit' value='Join today' className='bg-primary rounded-full md:rounded-tl-none md:rounded-bl-none text-lg md:text-2xl py-4 px-6 md:px-10 lg:py-6 lg:px-12 cursor-pointer hover:opacity-75 duration-150'/>
          </div>

          <div className='opacity-75 italic'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. <a href="#" className='hover:opacity-80 duration-150'>Terms of Service</a> and <a href="#" className='hover:opacity-80 duration-150'>Privacy Policy</a>
          </div>
        </form>
      </main>
      <footer className='container mx-auto p-6 flex flex-col md:flex-row items-center justify-between'>
        <p>
          Built by Emiliano Lopez
        </p>
        <div className='flex -mx-6'>
          <a href="#" className="mx-3 hover:opacity-80 duration-150">About Us</a> |
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Privacy</a> |
          <a href="#" className='mx-3 hover:opacity-80 duration-150'>Contact</a>
        </div>
      </footer>
    </div>
  )
}

export default App
