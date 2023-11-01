import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Index";
import { useOutletContext } from "react-router-dom";
import UserTable from "./UserTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";



function User() {

  const [posts, setPosts] = useState([]);

   useEffect(() => {
      fetch('http://incidencias-fiisi.up.railway.app/api/usuario')
         .then((response) => response.json())
         .then((data) => {
            console.log(data);
            setPosts(data);
         })
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

  const navigate = useNavigate();
  const [sidebarToggle] = useOutletContext();
  const [loading] = useState(false);
  const dataHeader = [
    {
      key: "id",
      label: "ID",
    },
    {
      key: "name",
      label: "Nombres",
    },
    {
      key: "dni",
      label: "Dni",
    },
    {
      key: "telefono",
      label: "Telefono",
    },
    {
      key: "email",
      label: "email",
    },
    {
      key: "action",
      label: "Opciones",
    },
  ];
  const handleDelete = () => { };
  
  return (
    <>
      <main className="h-full">
        <Navbar toggle={sidebarToggle} />


        {/* Tabla */}
        <div className="mainCard">
          


          <div className="border w-full border-gray-200 bg-white py-4 px-6 rounded-md">

            <h1 className="text-center text-black text-xl">
              Usuarios
            </h1>

            {/* Inicia boton añadir */}
            <button
              onClick={() =>
                navigate("/DetailsUser")}
              className="bg-violet-700 border-blue-500 text-gray-100 px-3 py-2 mt-5 mb-4 rounded-lg shadow-lg text-sm flex gap-2 items-center"
            >
              <div>
                <FontAwesomeIcon icon={faFloppyDisk} />
              </div>
              <span>Añadir usuario</span>
            </button>
            {/* termina boton añadir */}

            <UserTable
              loading={loading}
              dataHeader={dataHeader}
              data={posts}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default User;
