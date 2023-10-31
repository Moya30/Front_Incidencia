import React, { useState } from 'react'
import Navbar from "../components/Navbar/Index";
import { sidebarToggle } from '../utils/toggler';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFloppyDisk, faPhone } from '@fortawesome/free-solid-svg-icons';
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
  const handleNombUserChange = (e) => {
    setNombUsua(e.target.value);
  }

  const handlePassUserChange = (e) => {
    setPassUsua(e.target.value);
  }

  const handleNombPersChange = (e) => {
    setNombPers(e.target.value);
  }

  const handleAppaPersChange = (e) => {
    setAppaPers(e.target.value);
  }

  const handleApmaPersChange = (e) => {
    setApmaPers(e.target.value);
  }

  const handleDniPersChange = (e) => {
    setDniPers(e.target.value);
  }

  const handleTelfPersChange = (e) => {
    setTelfPers(e.target.value);
  }
  const handleEmailPersChange = (e) => {
    setEmailPers(e.target.value);
  }

  const handleNombRolChange = (e) => {
    setNombRol(e.target.value);
  }

  const handleSumitChange = async(e) =>{
    e.preventDefault();
    
    const user  =  await AddUser(
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
              <div>
                <label htmlFor="defaultInput" className="text-sm text-gray-600">
                  Nombre Usuario
                </label>
                <input
                  id="defaultInput"
                  type="text"
                  name="defaultInput"
                  onChange={handleNombUserChange}
                  className="text-sm placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Default Input"
                />
              </div>

              {/* Form Large */}
              <div className="mt-6">
                <label htmlFor="largeInput" className="text-sm text-gray-600">
                  Password
                </label>
                <input
                  id="largeInput"
                  type="text"
                  name="largeInput"
                  onChange={handlePassUserChange}
                  className="text-xl placeholder-gray-500 px-4 rounded-lg border border-gray-200 w-full md:py-2 py-3 focus:outline-none focus:border-emerald-400 mt-1"
                  placeholder="Large Input"
                />
              </div>

              <div className="mt-6 flex flex-row gap-4">
                <button className="bg-emerald-600 text-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
                  Confirmar
                </button>

                <button className="text-emerald-600 border border-gray-100 px-3 py-2 rounded-lg shadow-lg text-sm">
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
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}
