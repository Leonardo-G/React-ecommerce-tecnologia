import "./global.css";
import "../App.scss";
import { Navegacion } from "../components/navegacion/Navegacion";
import Providers from "@/provider";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>React App</title>
        <meta name="description" content="Web site created..." />
      </head>
      <body>
        <Providers>
          <Navegacion />
          <div id="root">{children}</div>
        </Providers>
        <footer className="w-full bg-black text-white text-center py-10">
          <div className="w-[1200px] max-w-[95%] mx-auto">
            <div className="md:grid grid-cols-3 justify-around  md:text-left">
              <div>
                <p className="text-xl font-bold">X Tecnol</p>
                <p className="text-gray-300 text-lg mt-2">
                  La mejor tecnología al alcance de tu mano
                </p>
              </div>
              <div className="mt-10 md:mt-0  md:text-left">
                <p className="text-xl font-bold">Enlaces rápidos</p>
                <div>
                  <p className="text-gray-300 text-lg mt-2">Inicio</p>
                  <p className="text-gray-300 text-lg mt-2">Marcas</p>
                  <p className="text-gray-300 text-lg mt-2">Sobre Nosotros</p>
                  <p className="text-gray-300 text-lg mt-2">Contacto</p>
                </div>
              </div>
              <div className="mt-10 md:mt-0  md:text-left">
                <p className="text-xl font-bold">Síguenos</p>
                <div className="flex justify-center gap-5 md:justify-start">
                  <p className="text-gray-300 text-lg mt-2">Facebook</p>
                  <p className="text-gray-300 text-lg mt-2">Instagram</p>
                  <p className="text-gray-300 text-lg mt-2">Twitter</p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p className=" text-center">
                2025. X Tecnol. Proyecto práctico de{" "}
                <Link
                  href="https://leonardoguanuco.vercel.app/"
                  rel="noreferrer noopener"
                  target="_blank"
                  className="text-gray-300 font-bold underline"
                >
                  Leonardo Guanuco
                </Link>
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
