"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Calculator,
  Headset,
  Briefcase,
  CheckCircle,
  Award,
  Users,
  TrendingUp,
  Shield,
  MessageCircle,
  Building2,
  Icon,
} from "lucide-react";

const packages = [
  {
    icon: Calculator,
    title: "Paket AB1 - ORDNING",
    description:
      "För dig som vill att ekonin ska fungera korrekt och utan krångel",
    features: [
      "Ägarledda aktiebolag",
      "0-2 anställda",
      "Företag som vill ha stabil grund",
    ],
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
  {
    icon: Calculator,
    title: "Paket AB2 - KONTROLL",
    description:
      "För dig som vill ha tydlig överblick utan att arbeta med ekonomi",
    features: [
      "Växande bolag",
      "1-10 anställda",
      "Ägare som vill förså läget löpande",
    ],
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
  {
    icon: Calculator,
    title: "Paket AB3 - ÄGARSTRUKTUR",
    description:
      "För bolag med holding, flera bolag eller långsiktigt ägarperspektiv",
    features: [
      "Koncerner",
      "Holdingbolag",
      "Region- och franchisebolag",
      "Fastighetsägande bolag",
    ],
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
];

const services = [
  {
    icon: Calculator,
    title: "Bokföring & Löner",
    description:
      "Vi tar hand om den löpande bokföringen, momsrapporteringen och lönehanteringen – digitalt, effektivt och korrekt.",
    features: [
      "Löpande bokföring",
      "Moms- och arbetsgivardeklarationer",
      "Lönehantering",
      "Digital kvitto- och fakturahantering",
    ],
    color: "from-[#2A9036] to-[#2EDB4A]",
  },
  {
    icon: Headset,
    title: "Bokslut & Deklaration",
    description:
      "När året ska sammanställas hjälper vi till med bokslut, årsredovisning och inkomstdeklaration. Du får full kontroll och tydlighet – utan krångel. ",
    features: [
      "Bokslut och årsredovisning",
      "Inkomstdeklarationer",
      "Rådgivning inför nytt räkenskapsår ",
    ],
    color: "from-[#2A9036] to-[#2A9036]",
  },
  {
    icon: Briefcase,
    title: "Rapporter & Rådgivning ",
    description:
      "Vi gör siffrorna begripliga och användbara. Med rätt analys och rådgivning får du bättre beslutsunderlag – och mer lönsamhet. ",
    features: [
      "Ekonomisk analys",
      "Likviditets- och resultatrapportering ",
      "Tillväxt- och investeringsplanering",
    ],
    color: "from-[#2A9036] to-[#043724]",
  },
  {
    icon: Users,
    title: "Mentorship för entreprenörer",
    description:
      "Att starta och driva företag kan kännas överväldigande – särskilt i början. Därför erbjuder Kloka Siffror mentorskap för entreprenörer och småföretagare som vill ha stöd, bollplank och vägledning i sin företagsresa.",
    features: [
      "Affärsstrategi och planering",
      "Prissättning, budget och ekonomistyrning",
      "Effektiva rutiner för administration och bokföring",
      "Råd om marknadsföring och kundrelationer",
      "Löpande coachning och uppföljning",
    ],
    color: "from-[#2EDB4A] to-[#2EDB4A]",
    extended: true,
  },
  {
    icon: Headset,
    title: "Virtuell Assistent (VA)",
    description:
      "Behöver du hjälp med administration, sociala medier eller kundkommunikation – men vill slippa anställa? Vår Virtuella Assistent är din flexibla resurs på distans.",
    features: [
      "Administration & back-office (avtal, fakturor, dokument)",
      "E-post, kalender och kundkontakt",
      "Sociala medier – planering, inlägg och publicering",
      "Kundservice och enklare support",
      "Webbuppdateringar och enklare e-handelsstöd",
      "Bokföringsunderlag och kvittohantering",
    ],
    color: "from-[#2EDB4A] to-[#2A9036]",
    process: [
      "Vi kartlägger vad du behöver hjälp med",
      "Du väljer mellan fast pris och löpande avtal",
      "Vi startar snabbt – ofta inom några dagar",
    ],
  },
  {
    icon: Building2,
    title: "Bostadsrättsföreningar (BRF)",
    description:
      "Ekonomisk förvaltning för små och medelstora föreningar – tryggt, enkelt och med fasta priser. Vi hjälper styrelser att få ordning, överblick och trygghet i den ekonomiska förvaltningen.",
    features: [
      "Löpande bokföring och avstämningar",
      "Leverantörs- och fakturahantering",
      "Budget",
      "Årsbokslut och årsredovisning (K2/K3)",
      "Rapporter och presentationer till styrelsen",
    ],
    color: "from-[#2A9036] to-[#043724]",
  },
];

const cities = [
  {
    name: "ÖREBRO",
    address: "Ekoxevägen 12",
    person: "Per Aneskans",
    title: "Redovisningskonsult",
    city: "702 30 Örebro",
    phone: "(213) 555-0200",
    email: "per@klokasiffror.se",
    img: "per_img.jpg",
    responsibilities: [
      "Den löpande redovisningen",
      "Bokslut och årsredovisning",
      "Kvalitet i leveransen",
      "Kundens dagliga kontakt",
    ],
  },
  {
    name: "STOCKHOLM",
    address: "Ekoxevägen 12",
    person: "Ronja Winskog",
    title: "Core Assist",
    city: "116 20 Stockholm",
    phone: "072-245 73 33",
    email: "ronja@klokasiffror.se",
    img: "ronja_img2.jpeg",
    responsibilities: [
      "Underlag",
      "Administration",
      "Dokumentation",
      "Sociala medier",
    ],
  },
  {
    name: "KUNGSHAMN",
    address: "Stenhuggaregatan 1B",
    person: "Scott Lindahl",
    title: "Grundare & Affärsarkitekt",
    city: "456 32 Kungshamn",
    phone: "(212) 555-0100",
    email: "scott@klokasiffror.se",
    img: "scott_img2.png",
    responsibilities: [
      "Struktur",
      "Paketering",
      "Ägar- och bolagslogik",
      "Kvalitetssäkring",
    ],
  },
];
const reasons = [
  {
    icon: Award,
    title: "Dokumenterad expertis",
    description:
      "Över 15 års erfarenhet av att hjälpa små och medelstora företag att växa med trygga och beprövade lösningar.",
  },
  {
    icon: Users,
    title: "Personligt & vänligt",
    description:
      "Du får en nära samarbetspartner som förstår din vardag, dina utmaningar och dina mål – inga opersonliga standardlösningar.",
  },
  {
    icon: TrendingUp,
    title: "Flexibla tjänster & tydliga priser",
    description:
      "Anpassade upplägg med fasta priser så att du alltid vet vad du betalar för och vilken nytta du får.",
  },
  {
    icon: MessageCircle,
    title: "Digitalt smart – mänskligt nära",
    description:
      "Moderna digitala lösningar kombinerat med personlig kontakt och snabb återkoppling när du behöver det.",
  },
];

export default function Home() {
  return (
    <>
      <div
        className="bg-gradient-to-br 
  from-[#2A9036] from-0% 
  via-[#2A9036] via-30% 
  to-[#2EDB4A] to-100% text-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
          <div className="text-center">
            <div className="flex justify-center mb-8 pb-8">
              <img
                src="test2.png"
                alt="Kloka Siffror"
                className="h-24 sm:h-24 lg:h-58 w-auto opacity-95"
              />
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-6">
              Redovisning som gör skillnad.
            </h1>
            <p className="text-xl sm:text-2xl mb-6 mt-12 text-white/90 max-w-3xl mx-auto font-bold">
              Ekonomisk ordning, struktur och kontroll - för ägarledda bolag och
              BRF
            </p>
            <p className="text-xl sm:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Kloka Siffror är en redovisningsbyrå som arbetar med fasta paket
              och tydliga arbetssätt. Vi urför och strukturerar det ekonomiska
              arbetet, följer upp och rapporterar - så att du som ägare eller
              styrelse får överblick, beslutsunderlag och lugn utan att behöva
              arbeta operativt med ekonomin.
            </p>
            <div className="flex flex-wrap justify-center gap-6 sm:gap-8">
              <div className="flex items-center gap-3">
                <Briefcase className="w-8 h-8" />
                <span className="text-lg">gör till knappar - Företag</span>
              </div>
              <div className="flex items-center gap-3">
                <Calculator className="w-8 h-8" />
                <span className="text-lg">BRF </span>
              </div>
              <div className="flex items-center gap-3">
                <Headset className="w-8 h-8" />
                <span className="text-lg">Core Assist</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*How we work 1*/}

      <div className="text-center bg-gray-50 py-24 ">
        <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
          Så arbetar vi
        </h2>

        <h3 className="text-2xl sm:text-3xl mb-12 text-gray-900">
          Nivå 1 - Kärnleverans
        </h3>

        <div className="px-4 sm:px-6 lg:px-8 lg:mx-10 flex flex-col md:flex-row items-center gap-12 px-6 text-left">
          <div className="md:w-1/2 space-y-6">
            <p className="text-xl text-gray-600">Alla kunder börjar här.</p>

            <p className="text-xl text-gray-600">
              Detta är grunden i vårt samarbete och består av:
            </p>

            <ul className="text-xl text-gray-600 list-disc list-inside space-y-2 ml-4">
              <li>Fasta paket</li>
              <li>Tydligt definierad leverans</li>
              <li>Strukturerade arbetsflöden</li>
              <li>Löpande uppföljning och rapportering</li>
              <li>Flaggning när något kräver beslut</li>
            </ul>

            <p className="text-xl text-gray-600">
              Vi tar hand om den löpande bokföringen, momsrapporteringen och
              lönehanteringen – digitalt, effektivt och korrekt.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src="klokasiffror_img_1.jpg" alt="" className="rounded-4xl" />
          </div>
        </div>
      </div>

      {/*How we work 2*/}

      <div className="text-center bg-gray-50 py-24">
        <h3 className="text-2xl sm:text-3xl mb-12 text-gray-900">
          Nivå 2 - Fördjupade instatser & konsultation
        </h3>

        <div className="px-4 sm:px-6 lg:px-8 lg:mx-10 flex flex-col md:flex-row items-center gap-12 px-6 text-left">
          <div className="md:w-1/2 flex justify-end">
            <img src="klokasiffror_img_2.jpg" alt="" className="rounded-4xl" />
          </div>
          <div className="md:w-1/2 space-y-6">
            <p className="text-xl text-gray-600">
              Utöver våra paket erbjuder vi även:
            </p>

            <ul className="text-xl text-gray-600 list-disc list-inside space-y-2 ml-4">
              <li>Extra genomgångar</li>
              <li>Projektbaserade instatser</li>
              <li>Fördjupade analyser</li>
              <li>Konsultation kopplad till specifika frågor</li>
            </ul>

            <p className="text-xl text-gray-600">
              Våra paket utgör grunden i samarbetet. Eventuella fördjupade
              insatser eller konsultationer sker alltid som ett separat tillägg.
            </p>
          </div>
        </div>
      </div>

      {/*packages*/}
      <div className="py-24 bg-white">
        <div className="px-4 sm:px-6 lg:px-8 lg:mx-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {packages.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: "easeOut",
                  }}
                >
                  <div
                    className={`bg-gradient-to-br ${service.color} p-8 text-white min-h-[300px] flex flex-col`}
                  >
                    <Icon className="w-16 h-16 mb-4" />
                    <h3 className="text-2xl sm:text-3xl mb-3">
                      {service.title}
                    </h3>
                    <p className="text-white/90">{service.description}</p>
                  </div>
                  <div className="p-8">
                    <h4 className="text-lg  my-2">Passar: </h4>
                    <ul className="space-y-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-[#2EDB4A] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/*In depth*/}
      <div className="py-24 bg-gradient-to-br from-[#043724] to-[#1F5F3A]">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-6 lg:px-8 lg:mx-10">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 shadow-xl hover:bg-white/20 transition-all duration-500">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                BRF – EKONOMISK FÖRVALTNING
              </h2>

              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-semibold leading-relaxed">
                Ekonomisk förvaltning med tydlig struktur och fasta arbetssätt
              </p>
            </div>

            {/* Description */}
            <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Kloka Siffror erbjuder ekonomisk förvaltning för
                bostadsrättsföreningar som vill ha
                <strong className="text-white font-semibold">
                  {" "}
                  ordning, transparens och förutsägbarhet
                </strong>
                .
              </p>

              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Vi utför den löpande ekonomiska hanteringen och rapporterar
                enligt avtalad struktur. Beslut och yttersta ansvar ligger
                alltid hos föreningens styrelse.
              </p>
            </div>

            {/* List */}
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4 text-center">
                Detta ingår vanligtvis
              </h3>

              <ul className="space-y-3 text-white/90 list-disc list-inside text-left max-w-md mx-auto">
                <li>Löpande bokföring</li>
                <li>Månads- och kvartalsrapportering</li>
                <li>Budget och prognosarbete</li>
                <li>Årsredovisning och deklaration</li>
              </ul>
            </div>
          </div>

          {/* CORE ASSIST */}

          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 sm:p-12 shadow-xl hover:bg-white/20 transition-all duration-500">
            {/* Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                CORE ASSIST
                <span className="block text-lg font-medium text-white/70 mt-2">
                  Virtuell assistent
                </span>
              </h2>

              <p className="mt-6 text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto font-semibold leading-relaxed">
                Operativt stöd som frigör tid och skapar struktur
              </p>
            </div>

            {/* Description */}

            <div className="max-w-3xl mx-auto text-center mb-12">
              <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
                Core Assist är Kloka Siffrors administrativa stödfunktion och
                arbetar med
                <strong className="font-semibold text-white">
                  {" "}
                  praktiska, operativa uppgifter{" "}
                </strong>
                som kompletterar den ekonomiska leveransen.
              </p>
            </div>

            {/* Grid */}

            <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
              {/* Column 1 */}

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Administrativt stöd
                </h3>

                <ul className="space-y-3 text-white/90 list-disc list-inside">
                  <li>Underlagshantering till bokföring</li>
                  <li>Fakturering och kundregister</li>
                  <li>Leverantörsadministration</li>
                  <li>Dokumentstruktur och arkivering</li>
                </ul>
              </div>

              {/* Column 2 */}

              <div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  Sociala medier & enklare marknadsadministration
                </h3>

                <ul className="space-y-3 text-white/90 list-disc list-inside">
                  <li>Publicering enligt innehållsplan</li>
                  <li>Enklare text- och bildhantering</li>
                  <li>Schemaläggning</li>
                  <li>Grundläggande uppföljning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*About Us*/}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT SIDE — TEXT */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight">
              OM OSS
            </h2>

            <p className="mt-8 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Kloka Siffror arbetar med företag och bostadsrättsföreningar som
              vill ha
              <strong className="text-gray-900 font-semibold">
                {" "}
                ordning, struktur och långsiktighet{" "}
              </strong>
              i sin ekonomi.
            </p>

            <div className="mt-10">
              <p className="text-lg font-semibold text-gray-900 mb-4">
                Vi tror på:
              </p>

              <ul className="space-y-3 list-disc list-inside text-gray-700 text-lg">
                <li>tydliga arbetssätt</li>
                <li>fasta paket</li>
                <li>långsiktiga relationer</li>
                <li>korrekt utförande</li>
                <li>tydlig rollfördelning</li>
              </ul>
            </div>

            <p className="mt-10 text-lg sm:text-xl text-gray-700 leading-relaxed">
              Vi levererar struktur, uppföljning och genomförande.
            </p>
          </div>

          {/* RIGHT SIDE — IMAGE */}
          <div className="relative">
            <img
              src="/klokasiffror_img_3.jpg" // change this path
              alt="Kloka Siffror"
              className="rounded-2xl shadow-xl object-cover w-full h-[450px]"
            />
          </div>
        </div>
      </div>

      {/*Our Team*/}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl mb-4 text-gray-900">
              Vårt team
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Boka en kostnadsfri konsultation med vårt team så sätter vi bollen
              i rullning!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {cities.map((location, index) => (
              <motion.div
                key={index}
                className="flex flex-col lg:flex-row gap-6 bg-gradient-to-br from-gray-50 to-white border-2 border-[#2A9036]/20 rounded-xl p-6 hover:border-[#00db33] transition-colors duration-300"
                initial={{ opacity: 0, y: 40, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
              >
                {/* TEXT */}
                <div className="flex-1">
                  {/* Title */}
                  <h3 className="text-xl text-gray-900 mb-4">
                    {location.title}
                  </h3>

                  {/* Image (mobile position) */}
                  <div className="md:hidden w-32 h-32 mb-6">
                    <img
                      src={location.img}
                      alt={location.name}
                      className="w-full h-full object-cover object-top rounded-lg"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-3 text-gray-600">
                    <p className="font-semibold text-gray-900">
                      {location.person}
                    </p>

                    <ul className="list-disc list-inside space-y-1">
                      {location.responsibilities.map((responsibility, i) => (
                        <li key={i}>{responsibility}</li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-[#2A9036]" />
                      <a
                        href={`mailto:${location.email}`}
                        className="text-sm hover:text-[#2A9036] transition-colors"
                      >
                        {location.email}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Image (desktop position) */}
                <div className="hidden md:block w-32 h-32 flex-shrink-0">
                  <img
                    src={location.img}
                    alt={location.name}
                    className="w-full h-full object-cover object-top rounded-lg"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/*rollfördelning*/}
          <div className="max-w-3xl mx-auto px-6 pb-16 text-center">
            <div className="mt-8 space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Kloka Siffror utför, strukturerar och följer upp det ekonomiska
                arbetet enligt avtal och gällande regelverk.
              </p>

              <p>
                Vi tillhandahåller rapporter, underlag och flaggar vid
                avvikelser eller förändringar som kräver beslut.
              </p>

              <p>
                Beslut, godkännande och det yttersta ansvaret ligger alltid hos
                kundens ägare, styrelse eller firmatecknare.
              </p>
            </div>
          </div>

          <div className="flex justify-center mb-8 pb-8">
            <img
              src="klokasiffror-logo.png"
              alt="Kloka Siffror"
              className="h-20 sm:h-24 lg:h-58 w-auto opacity-95"
            />
          </div>
          <div className="bg-gradient-to-br from-[#2A9036] to-[#043724] rounded-2xl p-8 sm:p-12 text-white text-center">
            <h3 className="text-2xl sm:text-3xl mb-4">Kontakt</h3>
            <br />
            <div className="space-y-2 text-lg">
              <p>
                Vill du veta vilket upplägg som passar bäst för ditt bolag eller
                din förening?
              </p>
              <br />

              <p>Kontakt via e-post</p>
              <p>Telefon enligt överesnkommelse</p>
              <br />
              <p>Vi börjar alltid med att säkerställa rätt struktur</p>
            </div>
            <br />
          </div>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm py-4">
        Org.Nr: 559521-6481 - &copy; 2026 Kloka Siffror AB - Website by Invicom.
      </div>
    </>
  );
}
