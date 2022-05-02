import Head from "next/head";
import Image from "next/image";
import stylessss from "../styles/About.module.css";
import styles from "../styles/Home.module.css";
import Sanuulga from "../components/sanuunlga";
import wave from "../wave.svg";
import wave2 from "../wave2.svg";
import img1 from "../img/Sainu.png";
import img2 from "../img/Vector.png";
import img3 from "../img/akar.png";
import img4 from "../img/cash.png";
import img5 from "../img/hun.png";
import img6 from "../img/kok.png";
import img7 from "../img/mongo.png";
import img8 from "../img/beleg.png";

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
          <div className={` shadow-lg ${stylessss.husnegt}`}>
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
            <div className={`${stylessss.pep}`}>
              <div className={`${stylessss.yom}`}>
                <div className={`${stylessss.ger} fs-5 ms-4 `}>БҮРТГҮҮЛЭХ</div>
              </div>
              <p className={` ms-4 ${stylessss.para}`}>
                Бидэнтэй нэгдэж санал бүрээ үргэлж үнэ цэнтэй байлга.
              </p>
            </div>
          </div>
          <div className={` shadow-lg  ${stylessss.husnegt}`}>
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
            <div className={`${stylessss.pep}`}>
              {" "}
              <div className={`${stylessss.yom}`}>
                {" "}
                <div className={`${stylessss.ger} fs-5 ms-4 `}>
                  САНАЛАА ХУВААЛЦАХ
                </div>
              </div>
              <p className={` ms-4 ${stylessss.para}`}>
                Дурын брэндийн судалгааг бөглөж саналаа хуваалцан оноогоо
                цуглуулах.
              </p>
            </div>
          </div>
          <div className={` shadow-lg  ${stylessss.husnegt}`}>
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
            <div className={`${stylessss.pep}`}>
              {" "}
              <div className={`${stylessss.yom}`}>
                {" "}
                <div className={`${stylessss.ger} fs-5 ms-4 `}>
                  {" "}
                  УРАМШУУЛАЛ АВАХ
                </div>
              </div>
              <p className={` ms-4 ${stylessss.para}`}>
                Цуглуулсан оноогоо хүссэн төрлийнхөө урамшуулалаар солин
                аваарай.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`${stylessss.bg}`}
          style={{
            backgroundImage: `url(${wave2.src})`,
            // width: "100%",
            // height: "100%",
          }}
        >
          <div className={`${stylessss.onoo}`}>
            <div className={`${stylessss.sub}`}></div>
            <div className={`${stylessss.lorem}`}>
              <div className={` fs-3 ${stylessss.larn}`}>
                Fillme онооны талаар{" "}
              </div>
              <div className={`${stylessss.lorm}`}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${stylessss.hol}`}>
        <div className={`${stylessss.polp}`}>
          <div className={` d-flex justify-content-end ${stylessss.kadr}`}>
            <div
              className={` d-flex justify-content-center align-items-start ${stylessss.papl}`}
            >
              <Image src={img8} />
            </div>
          </div>
          <div className={` fs-3 ${stylessss.kedr}`}>
            Түгээмэл асуултууд болон хариултууд{" "}
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

export const Icon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1728"
      height="1090"
      fill="none"
      viewBox="0 0 1728 1090"
    >
      <g filter="url(#filter0_d_482_193)">
        <path
          fill="#F2FFFF"
          d="M0 1077.5h1728V441.965s-241.94-298.349-494-284.468c-252.061 13.88-339.71 161.227-654-33-314.29-194.228-580-78-580-78V1077.5z"
        ></path>
      </g>
      <defs>
        <filter
          id="filter0_d_482_193"
          width="1752"
          height="1089.5"
          x="-12"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset></feOffset>
          <feGaussianBlur stdDeviation="6"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_482_193"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_482_193"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
};
