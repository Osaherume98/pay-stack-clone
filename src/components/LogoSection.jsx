import airPeace from "../assets/logo-wall/air-peace.svg";
import filmhouse from "../assets/logo-wall/film-house.svg";
import piggyvest from "../assets/logo-wall/piggyvest.svg";
import ibomAir from "../assets/logo-wall/ibom-air.svg";
import kuda from "../assets/logo-wall/kuda.svg";
import ariya from "../assets/logo-wall/ariiya.svg";

import dominos from "../assets/logo-wall/dominos.svg";
import mtn from "../assets/logo-wall/mtn.svg";
import lirs from "../assets/logo-wall/lirs.svg";
import bolt from "../assets/logo-wall/bolt.svg";
import betway from "../assets/logo-wall/betway.svg";
import carbon from "../assets/logo-wall/carbon.svg";

import axa from "../assets/logo-wall/axa-mansard.svg";
import abiaStateUni from "../assets/logo-wall/abia-state-university.svg";
import gigm from "../assets/logo-wall/gigm.svg";
import irokotv from "../assets/logo-wall/irokotv.svg";
import smile from "../assets/logo-wall/smile.svg";
import cowrywise from "../assets/logo-wall/cowrywise.svg";

export default function LogoSection() {
  const logos = [
    { src: airPeace, alt: "Air Peace" },
    { src: filmhouse, alt: "Filmhouse" },
    { src: piggyvest, alt: "Piggyvest" },
    { src: ibomAir, alt: "Ibom Air" },
    { src: kuda, alt: "Kuda" },
    { src: ariya, alt: "Ariiya" },

    { src: dominos, alt: "Domino's" },
    { src: mtn, alt: "MTN" },
    { src: lirs, alt: "Lagos Internal Revenue Service" },
    { src: bolt, alt: "Bolt" },
    { src: betway, alt: "Betway" },
    { src: carbon, alt: "Carbon" },

    { src: axa, alt: "AXA Mansard" },
    { src: abiaStateUni, alt: "Abia State University" },
    { src: gigm, alt: "GIGM" },
    { src: irokotv, alt: "IROKOtv" },
    { src: smile, alt: "Smile" },
    { src: cowrywise, alt: "Cowrywise" },
  ];

  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-7xl px-4 py-16 lg:py-24">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Powering growth for amazing
            <br />
            businesses
          </h2>

          <p className="mt-5 text-lg leading-7 text-slate-700">
            Paystack is a growth engine for a new generation of innovative, forward-looking organizations operating in Africa.
          </p>
        </div>

        <div className="mt-14">
          <div className="grid grid-cols-2 items-center gap-x-10 gap-y-10 sm:grid-cols-3 lg:grid-cols-6 lg:gap-y-14">
            {logos.map((logo) => (
              <LogoItem key={logo.alt} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoItem({ src, alt }) {
  return (
    <div className="flex items-center justify-center">
      <img
        src={src}
        alt={alt}
        className="h-7 w-auto opacity-90"
        draggable="false"
        loading="lazy"
      />
    </div>
  );
}
