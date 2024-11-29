import Link from "next/link";
import React from "react";


const Home =() => {
  return (
    <div> 
       <section>  
        <Link href="/login" className="hover:underline flex flex-auto">
          Login
        </Link><br></br>
        <Link href="/signup" className="hover:underline flex flex-auto">
          Signup
        </Link></section>
        </div>
  )
}
 export default Home
