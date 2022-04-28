import Head from "next/head";
import Image from "next/image";
import stylessss from "../styles/About.module.css";
import styles from "../styles/Home.module.css";
import Sanuulga from "../components/sanuunlga";
import wave from "../wave.svg";
import img1 from "../img/Sainu.png";
import img2 from "../img/Vector.png";
import img3 from "../img/akar.png";
import img4 from "../img/cash.png";
import img5 from "../img/hun.png";
import img6 from "../img/kok.png";
import img7 from "../img/mongo.png";
export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-light border border-3 bg-light ">
        <a href="#" className=" fs-3 navbar-brand ms-5">
          Fillme
        </a>
        <div className={`${stylessss.suh} bootsrap`}>
          <a href="#" className="bid me-4 text-decoration-none text-body">
            Бидний тухай
          </a>
          <a
            href="#"
            className="sudalgaa ms-4 me-4 text-decoration-none text-body"
          >
            Судалгаанууд
          </a>
          <a
            href="#"
            className=" uramshulal me-4 ms-4 text-decoration-none text-body"
          >
            Урамшуулал
          </a>
          <a href="#" className="user me-3 ms-4 text-decoration-none text-body">
            Нэвтрэх
          </a>
        </div>
      </nav>
      <div className={`${stylessss.tolgoi}`}>
        <div
          className={`${stylessss.wave}`}
          style={{
            backgroundImage: `url(${wave.src})`,
            // width: "100%",
            // height: "100%",
          }}
        >
          <div className={`${stylessss.zuun}`}>
            <div
              className={`${stylessss.deed} d-flex justify-content-center flex-column`}
            >
              <p className="bich  d-flex justify-content-center text-center   align-items-center ms-4  fs-5 ">
                {" "}
                Хүссэн байгуулгынхаа судалгааг бөглөн саналаа хуваалцаж оноогоо
                цуглуулж урамшуулалаа ав.
              </p>
              <div className=" d-flex justify-content-center weq">
                <div
                  className={`${stylessss.tovchluur}  btn btn-primary  d-flex justify-content-center text-center`}
                >
                  БИДЭНТЭЙ НЭГДЭХ
                </div>
              </div>
            </div>
          </div>
          <div className={`${stylessss.Baruun}`}>
            {" "}
            <Image src={img1} quality={100} height="500px" width="600px" />
          </div>
        </div>
      </div>
      <div className={`${stylessss.biy}`}>
        <div className={`${stylessss.hel}`}>
          <h3 className={`${stylessss.jich}`}>Урамшуулал авах алхамууд</h3>
        </div>
        <div className={`${stylessss.uram}`}>
          <div className={` shadow-lg rounded ${stylessss.husnegt}`}>
            <div className={`${stylessss.pop}`}>
              <div className={`${stylessss.pl}`}>
                <div className={`${stylessss.nogoon}`}>
                  <p className={`${stylessss.hor}`}>АЛХАМ НЭГ</p>
                </div>
                <div className={`${stylessss.sum}`}>
                  <Image src={img2} />
                </div>
              </div>
              <div className={` d-flex justify-content-center ${stylessss.pk}`}>
                <Image
                  // className={`${stylessss.bat}`}
                  src={img5}
                  height="115px"
                  width="115px"
                />
              </div>
            </div>
            <div className={`${stylessss.pep}`}></div>
          </div>
          <div className={` shadow-lg rounded ${stylessss.husnegt}`}>
            <div className={`${stylessss.pop}`}>
              <div className={`${stylessss.pl}`}>
                {" "}
                <div className={` ${stylessss.nogoon}`}>
                  <p className={`${stylessss.hor}`}>АЛХАМ ХОЁР</p>
                </div>
                <div className={`${stylessss.sum}`}>
                  <Image src={img3} quality={100} />
                </div>
              </div>
              <div className={`${stylessss.pk}`}>
                <Image src={img6} />
              </div>
            </div>
            <div className={`${stylessss.pep}`}></div>
          </div>
          <div className={` shadow-lg rounded ${stylessss.husnegt}`}>
            <div className={`${stylessss.pop}`}>
              <div className={`${stylessss.pl}`}>
                {" "}
                <div className={`${stylessss.nogoon}`}>
                  <p className={`${stylessss.hor}`}>АЛХАМ ГУРАВ</p>
                </div>
                <div className={`${stylessss.sum}`}>
                  <Image src={img4} />
                </div>
              </div>
              <div className={`${stylessss.pk}`}>
                <div className={`${stylessss.kp}`}>
                  <Image height="115px" src={img7} width="115px" />
                </div>
              </div>
            </div>
            <div className={`${stylessss.pep}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export const WaveIcon = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path
        fill="#09f"
        d="M0 288l48-16c48-16 144-48 240-74.7 96-26.3 192-48.3 288-32 96 15.7 192 69.7 288 85.4 96 16.3 192-5.7 288 0 96 5.3 192 37.3 240 53.3l48 16H0z"
      ></path>
    </svg>
  );
};
