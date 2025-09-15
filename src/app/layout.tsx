import "../App.scss";
import { Navegacion } from "../components/navegacion/Navegacion";
import { CartContextProvider } from "../context/CartContext";
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
        <CartContextProvider>
          <Navegacion />
        </CartContextProvider>

        <div id="root">{children}</div>
      </body>
    </html>
  );
}
