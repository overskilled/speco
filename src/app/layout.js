import { ToastContainer } from "react-toastify";
import "./globals.css";
import StoreProvider from "./Storeprovider";
import 'react-toastify/dist/ReactToastify.css'


export const metadata = {
  title: "Speco",
  description: "Studing via interactive videos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        /> */}
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html >
  );
}
