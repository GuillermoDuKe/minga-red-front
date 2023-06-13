
export default function Display({ options,show,setShow }) {

  return (
      <div className="absolute z-20 top-0 left-0 h-full w-full bg-gradient-to-r from-indigo-700 to-indigo-500 flex flex-col items-center md:w-[500px] transition-colors duration-300">
          <div className="w-11/12 my-1 p-2 flex justify-between items-center">
              <img className="h-14" src="/img/profile.png" alt="" />
              <div className="w-full px-3 flex flex-col">
                  <span className="font-semibold text-gray-100">Guillermo Duque</span>
                  <span className="font-semibold text-gray-100">correo@gmail.com</span>    
              </div>
              <svg onClick={()=>setShow(!show)} className="h-14 w-14 p-2 font-semibold text-gray-100 text-end hover:text-white cursor-pointer" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
          </div>
          {options?.map((each,index)=> <input type='button' key={index} className="w-11/12 my-1 p-2 text-gray-100 hover:bg-white hover:text-indigo-700 rounded-lg  cursor-pointer" value={each.title} /> )}
      </div>
  ) 
}
