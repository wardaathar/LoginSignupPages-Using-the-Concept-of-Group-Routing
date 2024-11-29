import Image from "next/image";
import Link from "next/link";
import Home from "./componets/Home";
import Header from "./componets/Header";
import Footer from "./componets/Footer";

export default function Page() {
  return (
    <div>
      <Header/>
       <h1 className=" font-bold text-center  items-center">WArkBooK</h1>
       <Home/>
       <Footer/>
      </div>
  
   
       
  );
}
