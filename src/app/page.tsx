"use client"
import Image from "next/image";
import { ToastContainer, toast } from 'react-toastify';
import successToast from "./components/Toast";
import 'react-toastify/dist/ReactToastify.css';
export default function Home() {
// const notify=()=>{
//   successToast("Ayush garg")
// }
  return (
    <main className="flex justify-center content-center h-screen w-screen">
   
      {/* <button className="" onClick={()=>successToast("Ayush")}>Toast</button> */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        // transition:Bounce,
/>


    </main>
  );
}
