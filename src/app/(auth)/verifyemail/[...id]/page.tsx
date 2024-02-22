

"use client"
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function VerifyEmailPage({params}:{params:any}) {

  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
      try {
          await axios.post('/api/users/verifyemail', {token})
          setVerified(true);
      } catch (error:any) {
          setError(true);
          // console.log(error);
          
      }

  }

  useEffect(() => {
      const urlToken = decodeURIComponent(params.id).replace(/,/g, "/");
      // console.log(urlToken);
      setToken(urlToken || "");
  }, []);


  useEffect(() => {
      if(token.length > 0) {
          verifyUserEmail();
      }
  }, [token]);
  // $2a$10$nmwJhJ3nOQvx9mcI1p8I8eGsEgulFvG6fRvfPxKCC41qL2Fimtoni
  // $2a$10$nmwJhJ3nOQvx9mcI1p8I8eGsEgulFvG6fRvfPxKCC41qL2Fimtoni
  return(
    <div className="h-screen w-screen flex flex-col items-center justify-center ">
      {verified && <div className="">

            <h1 className="">Thanks for verifying the email.</h1>
            <h1 className="">Welcome in the our percious family.</h1>
            <p className="">
               Click here to move to the
          <Link href="/" className="text-sky-400 after:content-['⇯'] text-xl font-bold"> Home page</Link>
            .
           </p>
      </div>}
      {error && <div className="">
                <h1 className="text-4xl">Sorry but the you are not verified</h1>
                <h2 className="text-3xl"><span className="text-red-300">Note: </span>Ignore if you already verified</h2>
        </div>}
            {/* <h1 className="bg-slate-500 p-3 rounded">{token.token}</h1> */}
    </div>
  )

}



// const page =({params}:{params:any}) => {
//   const [token,setToken]=useState("");
//   let decode=decodeURIComponent(params.id);
//   console.llog
    
//   return (
//     <div className="h-screen w-screen flex flex-col items-center justify-center ">
//         <h1 className="">Thanks for verifying the email.</h1>
//         <h1 className="">Welcome in the our percious family.</h1>
//         <p className="">
//             Click here to move to the
//         <Link href="/" className="text-sky-400 after:content-['⇯'] text-xl font-bold"> Home page</Link>
//         .
//         </p>
//         {/* <h1 className="bg-slate-500 p-3 rounded">{token.token}</h1> */}
//     </div>
//   )
// }
// export default page