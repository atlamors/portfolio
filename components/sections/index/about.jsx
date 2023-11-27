// Core packages
import Image from "next/image";

// Section structure
import Section from "../../structure/section";
import Container from "../../structure/container";

// Section general blocks
import SectionTitle from "../../blocks/section.title.block";
import SectionGridBg from "../../blocks/section.grid.block";

// Section specific blocks
import BadgesBlock from "../../blocks/about.badges.block";
import CopyBlock from "../../blocks/about.copy.block";
import SelfDescription from "../../blocks/about.self.block";

// Section scss
import about from "../../../styles/sections/index/about.module.scss";

// Import content
import content from "../../../content/index/about.json";

/**
 * Section: About
 * An overview of yourself.
 * Highlight your top level attributes and disciplines.
 *
 * @returns {jsx} <About />
 */
export default function About() {
  return (
    <Section classProp={about.section} IdName="about-us">
      <Container spacing={["verticalXXXLrg"]}>
        <SectionTitle
          title="Conoce al equipo REBULX"
          preTitle="SOBRE NOSOTROS"
          subTitle="Creemos que la tecnología es un componente clave para el éxito empresarial. Nos centramos en la innovación y la transformación digital."
        />
        <section className={about.content}>
          {content.map((data, index) => {
            return <SelfDescription content={data} key={index} />;
          })}
        </section>
      </Container>
    </Section>
  );
}

const methods = [
  { key: "planet-moon", name: "User Research", type: "fad" },
  { key: "qrcode", name: "Digital Strategy", type: "fad" },
  { key: "window", name: "Design Systems", type: "fad" },
  { key: "cubes", name: "Product Strategy", type: "far" },
  { key: "layer-plus", name: "Brand Strategy", type: "fad" },
  { key: "solar-system", name: "Operations", type: "fad" },
];
