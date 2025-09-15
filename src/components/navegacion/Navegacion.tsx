"use client";

import React, { useState } from "react";
import { CartWidget } from "./CartWidget";
import "./Navegacion.scss";
import Link from "next/link";
import { Menu } from "lucide-react";
export const Navegacion = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      <nav className="navegacion">
        <div className="navegacion__logo">
          <Link href="/" onClick={handleCloseMenu}>
            X Tecnol
          </Link>
        </div>
        <div className={`navegacion__enlaces ${menu && "menuActive"}`}>
          <Link href="/" onClick={handleCloseMenu}>
            Inicio
          </Link>
          <ul className="">
            <li className="relativeNav">
              {" "}
              <p>Marcas</p>
              <ul className="enlaceOculto">
                <div className="overflowBox">
                  <li>
                    <Link href="/category/LG" onClick={handleCloseMenu}>
                      LG
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/Apple" onClick={handleCloseMenu}>
                      Apple
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/Samsung" onClick={handleCloseMenu}>
                      Samsung
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/Motorola" onClick={handleCloseMenu}>
                      Motorola
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/Huawei" onClick={handleCloseMenu}>
                      Huawei
                    </Link>
                  </li>
                  <li>
                    <Link href="/category/Otros" onClick={handleCloseMenu}>
                      Otros
                    </Link>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
          <Link href="/busqueda" onClick={handleCloseMenu}>
            Buscar
          </Link>
        </div>
        <CartWidget handleCloseMenu={handleCloseMenu} />
        <div className="navegacion__menu" onClick={handleMenu}>
          <Menu />
        </div>
      </nav>
    </header>
  );
};
