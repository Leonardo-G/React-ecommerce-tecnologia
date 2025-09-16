import "../App.scss";
import { Navegacion } from "../components/navegacion/Navegacion";
import Providers from "@/provider";
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
      </body>
    </html>
  );
}
