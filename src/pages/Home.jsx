import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Importando los componentes necesarios
import Sidebar from "../components/Sidebar";
import TestimonialCard from "../components/TestimonialCard";
import StatCard from "../components/StatCard";

// Importando los assets necesarios
import iconFilter from "/assets/iconFilter.png";
import iconSearch from "/assets/iconSearch.png";
import iconNotification from "/assets/iconNotification.png";
import iconAnguloAbajo from "/assets/iconAnguloAbajo.png";
import iconMas from "/assets/iconMas.png";
import imagenBienvenida from "/assets/imagenBienvenida.png";

const Home = () => {
  const [activeTab, setActiveTab] = useState("nuevos");
  const [tabRefs, setTabRefs] = useState({

    nuevos: null,
    pendientes: null
  })

  const testimoniosNuevos = [
    { image: "/assets/imageTestimonial1.png", name: "Thompson Mark", title: "Vicepresidente de Tecnología." },
    { image: "/assets/imageTestimonial2.png", name: "James Kim", title: "Jefe de ingeniería en DataPro." },
    { image: "/assets/imageTestimonial3.png", name: "Emily Watson", title: "Responsable de producto." }
  ];

  const testimoniosPendientes = [
    { image: "/assets/imageTestimonial4.png", name: "Sarah Johnson", title: "Gerente de marketing." },
    { image: "/assets/imageTestimonial5.png", name: "Richard White", title: "Director de operaciones." },
  ];

  // Elegir la lista de testimonios según la pestaña activa
  const testimonios = activeTab === "nuevos" ? testimoniosNuevos : testimoniosPendientes;

  // Funcion para establecer las referencias de los botones
  const setTabRef = (tab, element) => {
    if (element && tabRefs[tab] !== element) {
      setTabRefs(prev => ({
        ...prev,
        [tab]: element
      }));
    }
  };
  // Calculo de la pocision y ancho del indicador
  const getIndicatorStyles = useMemo (() => {
    
    if (!tabRefs[activeTab]) return {};
    const activeTabElement = tabRefs[activeTab];
    return {
      width: activeTabElement.offsetWidth,
      left: activeTabElement.offsetLeft,
    };
  }, [activeTab, tabRefs]);

  return (

    <div className="h-auto m-7 sm:ml-40">
      {/* Sección de la barra de búsqueda */}
      <div className="flex items-center justify-between gap-2 w-full sm:mt-10">
        <div className="flex-grow justify-between items-center relative max-w-[68%]">
          <img src={iconSearch} className="h-4 absolute left-3 top-1/2 transform -translate-y-1/2" alt="Icono de búsqueda" /> 
            <button>
              <img src={iconFilter} className="h-4 absolute right-3 top-1/2 transform -translate-y-1/2" alt="Icono de filtrar" />
            </button>
          <input type="text" className="w-full py-2 pl-10 pr-10 rounded-lg bg-black/7" style={{ fontFamily: "'Mint Sans', sans-serif" }} placeholder="Buscar..." />
        </div>
        <div className="flex items-center">
          <img src={iconNotification} className="h-4 mr-3" alt="Notificaciones" />
            <div className="h-10 rounded-lg w-10 bg-black/7"></div>
            <button>
            <img src={iconAnguloAbajo} className="h-2 ml-1" alt="Icono de búsqueda" />
          </button>
        </div>
      </div>

      {/* Sección de saludo */}
      <div className="flex justify-center items-center rounded-sm w-full h-35 bg-gray-100 mt-10">
        <div className="ml-10">
          <h1 style={{ fontFamily: "'Mint Sans', sans-serif" }} className="font-bold text-xl">Hola Gloria!</h1>
          <p style={{ fontFamily: "'Quicksand', sans-serif" }} className="font-medium">Es bueno verte de nuevo.</p>
        </div>
        <div>
          <img src={imagenBienvenida} className="w-39" alt="Imagen bienvenida" />
        </div>
      </div>

      {/* Sección de estadísticas */}
      <div className="flex h-21 mt-10 gap-x-3">
        <StatCard value="10" label="Testimonios aprobados" />
        <StatCard value="6" label="Testimonios rechazados" />
        <StatCard value="10" label="Noticias publicadas" />
      </div>

      {/* Sección de agregar noticia */}
      <div className="flex justify-center items-center mt-10 w-full h-15 border-2 rounded-lg gap-2">
        <img src={iconMas} className="h-6" alt="Icono de agregar noticia" />
        <h1 style={{ fontFamily: "'Mint Sans', sans-serif", paddingTop: "4px"}} className="text-lg font-bold">Crear noticia</h1>
      </div>

      {/* Sección de testimonios */}
      <div className="w-full h-auto mt-10">
        <h1 style={{ fontFamily: "'Mint Sans', sans-serif" }} className="font-bold text-xl">Testimonios</h1>
        <div className="relative flex gap-7 mt-5 font-bold">
          <button 
            ref={(el) => setTabRef("nuevos", el)}
            onClick={() => setActiveTab("nuevos")} 
            style={{ fontFamily: "'Mint Sans', sans-serif" }}
            className={`pb-2 ${activeTab === "pendientes" ? "text-[#0000004D]" : "text-black"}`}
          >
            Nuevos
          </button>
          <button 
            ref={(el) => setTabRef("pendientes", el)}
            onClick={() => setActiveTab("pendientes")} 
            style={{ fontFamily: "'Mint Sans', sans-serif" }}
            className={`pb-2 ${activeTab === "nuevos" ? "text-[#0000004D]" : "text-black"}`}
          >
            Pendientes de revisión
          </button>
          
          {/* Indicador animado */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-[#9CE840]"
            initial={false}
            animate={getIndicatorStyles} // Usamos la versión memorizada
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

        </div>

        <div className="flex flex-col mt-2 gap-3">
          {testimonios.map((testimonio, index) => (
            <TestimonialCard key={index} {...testimonio} />
          ))}
        </div>
      </div>

      {/* Sección de la barra lateral */}
      <Sidebar />
    </div>
  );
};

export default Home;
