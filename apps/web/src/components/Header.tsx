export const Header = () => {
  return(
    <>
    <div>
      <div className='bg-gradient-to-r from-gray-700 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3x1 font-bold primary-color ml-4'>Naufal</h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about">About</a></li>
                <li className='p-5'><a href="#work">Work</a></li>
                <li className='p-5'><a href="#contant">Contant</a></li>
            </ul>
        </div>
    </div>
    </>
  ) ;

};
