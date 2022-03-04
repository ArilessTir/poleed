import React from "react";
import PdfLink from "../component/pdfLink/pdfLink";
import home_about1 from "../assets/images/home_about1.jpg";

const About = () => {
  const tab = [
    { id: 1, link: "../assets/pdf/test.pdf", text: "Bulletin d'adhesion" },
    { id: 2, link: "../assets/pdf/test.pdf", text: "Charte" }
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas,
            odio esse suscipit laboriosam explicabo provident pariatur
            laudantium accusamus quia delectus deleniti sequi iure
            necessitatibus, qui praesentium eligendi, minus obcaecati molestiae.
            Rem, iste sint repudiandae voluptatum excepturi qui neque debitis
            autem quaerat. Consequatur a tempora nam ullam deserunt eum ut enim
            eos quaerat quidem placeat aliquam nemo accusamus cum, quod
            <br />
            <br />
            praesentium? Odit et amet ipsa assumenda unde molestias obcaecati ex
            commodi consequuntur quas! Quae corrupti quibusdam, quo ab rem
            accusamus provident, obcaecati dignissimos itaque, vel est eos quam
            aliquam illo ad? Rem nostrum dignissimos non adipisci, praesentium
            qui! Veniam dignissimos culpa facere? A tenetur qui quod repudiandae
            consequuntur eaque rem sit quia illum, dignissimos suscipit
            temporibus distinctio nulla magnam eveniet cupiditate. aliquam illo
          </p>
          <div className=" flex flex-wrap space-x-4 justify-center mt-5">
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
