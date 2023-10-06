"use client";
import "./globals.css";
import { Container } from "./style";
import img5 from "../../public/image 5.png";
import img4 from "../../public/image 4.png";
import visa from "../../public/visa.png";
import visab from "../../public/visablue.png";
import master from "../../public/master.png";
import Image from "next/image";
export default function Home() {
  return (
    <Container>
      <main>
        <div className="card" style={{ marginTop: "-100px" }}>
          <div className="items">
            <div className="title">
              <Image src={visa} alt="visa" width={80} />
            </div>
            <div className="footer">
              <h1>4455 5491 6118 6164 </h1>
              <p>Edward Hunt</p>
            </div>
          </div>
        </div>
        <div className="card" style={{ marginTop: "90px" }}>
          <div className="bg">
            <Image alt="bg" src={img4} />
          </div>
          <div className="items">
            <div className="title">
              <Image src={master} alt="visa" width={60} />
            </div>
            <div className="footer">
              <h1>4455 5491 6118 6164 </h1>
              <p style={{ color: "black" }}>Edward Hunt</p>
            </div>
          </div>
        </div>
        <div className="card" style={{ marginTop: "10px" }}>
          <div className="bg">
            <Image alt="bg" src={img5} />
          </div>
          <div className="items">
            <div className="title">
              <Image alt="visab" src={visab} width={80} />
            </div>
            <div className="footer">
              <h1>4455 5491 6118 6164 </h1>
              <p style={{ color: "black" }}>Edward Hunt</p>
            </div>
          </div>
        </div>
      </main>
    </Container>
  );
}
