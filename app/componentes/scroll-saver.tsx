"use client";
import { useEffect, useState } from "react";

export default function ScrollSaver() {
  const [isRestored, setIsRestored] = useState(false);

  useEffect(() => {
    const scrollContainer = document.getElementById("scroll-container");

    if (!scrollContainer) {
      console.log("❌ No se encontró el contenedor de scroll.");
      return;
    }

    // Restaurar scroll si ya hay una posición guardada al primer render
    const savedScrollPosition = sessionStorage.getItem("scrollPosition");

    if (savedScrollPosition && !isRestored) {
      scrollContainer.scrollTop = Number(savedScrollPosition);
      setIsRestored(true);
    }

    let scrollTimeout: NodeJS.Timeout; // Variable para manejar el tiempo de inactividad

    const handleScroll = () => {
      // Si hay un timeout pendiente, lo cancelamos
      if (scrollTimeout) clearTimeout(scrollTimeout);

      // Establecemos un nuevo timeout para guardar el scroll después de 200 ms
      scrollTimeout = setTimeout(() => {
        sessionStorage.setItem("scrollPosition", scrollContainer.scrollTop.toString());
      }, 200); // 200 ms de espera para que se guarde el scroll después de que el usuario termine de hacer scroll
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout); // Limpiamos el timeout al desmontar
    };
  }, [isRestored]);

  return null;
}