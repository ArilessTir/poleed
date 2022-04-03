import React from "react";
import PdfLink from "../component/pdfLink/pdfLink";
import home_about1 from "../assets/images/home_about1.jpg";
import adhesion from "../assets/pdf/adhesion.pdf";
import reglement from "../assets/pdf/reglement.pdf";

const About = () => {
  const tab = [
    { id: 1, link: adhesion, text: "Bulletin d'adhesion" },
    { id: 2, link: reglement, text: "Réglement" }
  ];
  return (
    <section className="border-white max-w-10xl max-w-screen-hd  mx-auto mt-20">
      <h1 className="text-center py-10 font-bold text-4xl">A propos</h1>

      <section className="md:flex block px-5 py-10 mx-auto max-w-7xl gap-5">
        <div
          style={{
            backgroundImage: `url(${home_about1})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
          className="h-96 mb-5 md:w-1/2 md:h-auto md:mb-0 "
        ></div>
        <div className="md:w-1/2 flex flex-col justify-between">
          <p className=" text-lg">
            Poleed est une association de promotion artistique Roubaisienne.
            Elle est spécialisée dans l’accompagnement d’artiste. Elle met en
            avant des artistes lors d’événements et en créant du contenu
            visible. La structure s’engage sur l’accompagnement d’artistes dans
            tous les aspects de son projet et lui offre les clefs pour gérer son
            projet. Avec ces réalisations, (documentaire, clip, EP, single,
            atelier) elle a pour ambition de favoriser l’accès au monde de
            l’audiovisuel auprès des porteurs de projet. Elle croit en des
            valeurs de soutien et de collectivité dans lesquelles les artistes
            se reconnaissent.
            <br />
            <br />
            Les artistes suivis par Poleed s’intègrent dans les projets de
            manières volontaires et bénévoles. Ils sont responsables et seuls
            garants de l’énergie qui émanent de leur projet. Poleed est le
            reflet de ceux qui la font briller et nikomok parmi les rallumeurs
            d’étoiles.
          </p>
          <div
            className="flex flex-col space-y-4 md:flex-row
                        md:space-x-4 md:space-y-0 justify-center mt-5"
          >
            {tab.map(link => {
              return <PdfLink link={link} />;
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
