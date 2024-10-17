import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
<div>
<Header/>
        <div className="main">
        <h1>Welcome to Next.js!</h1>
        </div>
      <Footer/>
</div>
  );
}
