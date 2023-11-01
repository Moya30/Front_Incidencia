import React, { useState } from 'react'
import Navbar from "../components/Navbar/Index";
import { sidebarToggle } from '../utils/toggler';
import AddUser from '../libs/AddUser'
import { useNavigate } from "react-router-dom";
export const DetailsUser = () => {


  const [nombUsua, setNombUsua] = useState("");
  const [passUsua, setPassUsua] = useState("");
  const [nombPers, setNombPers] = useState("");
  const [appaPers, setAppaPers] = useState("");
  const [apmaPers, setApmaPers] = useState("");
  const [dniPers, setDniPers] = useState("");
  const [telfPers, setTelfPers] = useState("");
  const [emailPers, setEmailPers] = useState("");
  const [nombRol, setNombRol] = useState("");

  const navigate = useNavigate();



  const handleSumitChange = async (e) => {
    e.preventDefault();

    const user = await AddUser(
      nombUsua,
      passUsua,
      nombPers,
      appaPers,
      apmaPers,
      dniPers,
      telfPers,
      emailPers,
      nombRol
    );

    if (user.message) {
      console.log("error en grabado")
      return;
    }
    navigate(`/DetailsUser`);
  }

  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />

        {/* Main Content */}
        <div className="mainCard">
          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">
            <form onSubmit={handleSumitChange}>
              {/* Form Default */}
              <div className='grid grid-cols-2 gap-4'>
                <div>
                  <label className="text-sm text-gray-600">
                    Nombre Usuario
                  </label>
                  <input
                    id="defaultInput"
                    type="text"
                    name="defaultInput"
                    onChange={(e) => setNombUsua(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Usuario"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Contraseña
                  </label>
                  <input
                    id="password"
                    type="password"
                    name="lbpassword"
                    onChange={(e) => setPassUsua(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="password"
                  />
                </div>
              </div>
              <div className='mt-4'>
                  <label className="text-sm text-gray-600">
                    Nombres
                  </label>
                  <input
                    id="nombres"
                    type="text"
                    name="nombres"
                    onChange={(e) => setNombPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Apellido Paterno"
                  />
                </div>
              <div className='grid grid-cols-2 gap-4 mt-4'>
                <div>
                  <label className="text-sm text-gray-600">
                    Apellido Paterno
                  </label>
                  <input
                    id="apPaterno"
                    type="text"
                    name="nameApPaterno"
                    onChange={(e) => setAppaPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Escriba sus nombres"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Apellido Materno
                  </label>
                  <input
                    id="ApMaterno"
                    type="text"
                    name="ApMaterno"
                    onChange={(e) => setApmaPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="Apellido Materno"
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4 mt-4'>
                <div>
                  <label className="text-sm text-gray-600">
                    DNI
                  </label>
                  <input
                    id="dni"
                    type="text"
                    name="dni"
                    onChange={(e) => setDniPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="ingrese su dni"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-sm text-gray-600">
                    Telefono
                  </label>
                  <input
                    id="telefono"
                    type="text"
                    name="telefono"
                    onChange={(e) => setTelfPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="ingrese su telefono"
                  />
                </div>
              </div>
              <div className='grid grid-cols-2 gap-4 mt-4'>
                <div>
                  <label className="text-sm text-gray-600">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    onChange={(e) => setEmailPers(e.target.value)}
                    className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                    placeholder="ingrese su email"
                  />
                </div>

                <div>
                  <label  className="block text-sm font-medium leading-6">
                    Rol
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset sm:max-w-xs sm:text-sm sm:leading-6"
                    >
                      <option>Administrador</option>
                      <option>Usuario</option>
                    </select>
                  </div>
                </div>
              </div>
              {/* Form Large */}
              {/* <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Password
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  onChange={(e) => setPassUsua(e.target.value)}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Contraseña"
                />
              </div> */}

              <div className="mt-5 flex flex-row gap-4">
                <button 
                className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm"
                
                >
                  Guardar
                </button>

                {/* <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Secondary Button
                </button>

                <button className="text-emerald-600 border border-emerald-300 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Outlined Button
                </button>

                <button className="bg-emerald-600 border-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm flex gap-2 items-center">
                  <div>
                    <FontAwesomeIcon icon={faFloppyDisk} />
                  </div>
                  <span>Primary Icon Button</span>
                </button> */}
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
