export const Header = () => {
  return(
    <>
    <div>
      <div className='bg-gradient-to-r from-gray-700 h-[100px] max-w-[1200px] mx-auto flex justify-between items-center'>
            <h1 className='text-3x1 font-bold primary-color ml-4'><a href="/">Logo</a></h1>
            <ul className='hidden md:flex'>
                <li className='p-5'><a href="#about">Create Ticket</a></li>
                <li className='p-5'><a href="#work">My Ticket</a></li>
                <li className='p-5'><a href="/login">Login</a></li>
            </ul>
        </div>
    </div>
    </>
  ) ;

};
