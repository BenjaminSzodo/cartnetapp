const Cartnet = () => {
  return (
    
       <form>
        <div className="mx-auto flex flex-col items-center justify-center h-screen">
      <div className=" flex items-center text-sm text-center bg-transparent w-full box-border  px-2 py-2 border-b-4 border-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <input
          className="text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 ml-4 placeholder:italic placeholder-text-slate-200"
          type="text"
          placeholder="Nombre"
        />
      </div>
      <div className=" flex items-center text-sm text-center bg-transparent w-full box-border  px-2 py-2 border-b-4 border-transparent">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>

        <input
          className="text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 ml-4 placeholder:italic placeholder-text-slate-200"
          type="text"
          placeholder="Apellido"
        />
      </div>
      <div className=" flex items-center text-sm text-center bg-transparent w-full box-border  px-2 py-2 border-b-4 border-transparent">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z"
          />
        </svg>

        <input
          className="text-sm text-center bg-transparent w-full box-border duration-300 px-2 py-2 border-b-4 border-transparent focus:outline-none hover:border-blue-500 focus:border-blue-500 ml-4 placeholder:italic placeholder-text-slate-200"
          type="text"
          placeholder="DNI"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="genero"
          className="block text-sm text-center font-medium italic text-slate-200"
        >
          Género
        </label>
        <select
          id="genero"
          className="appearance-none mt-1 block w-full italic rounded-full text-center shadow-sm"
        >
          <option value="">Seleccionar género</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="no_definido">No definido</option>
        </select>
      </div>
      <button
        type="submit"
        className=" w-40 h-auto  bg-blue-500  text-slate-200 hover:text-slate-600 border-none font-bold p-2 rounded-full flex items-center justify-center mt-2 mb-4 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-75 hover:bg-blue-300 duration-300  focus:bg-transparent"
      >
        Crear Usuario
      </button></div>
    </form> 
    
    
  );
};

export default Cartnet;
