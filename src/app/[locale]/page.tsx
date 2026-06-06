import Header from "./Components/Header";
import About from "./Components/About";
import ProjectCard from "./Components/ProjectCard";
import Hero from "./Components/Hero";
import Skills from "./Components/Skills";
import SkillsMarquee from "./Components/SkillsMarquee";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

export default async function Home() {
  return (
    <main>
      <section id="home"><Hero /></section>
      <SkillsMarquee />
      <section id="projects"><ProjectCard /></section>
      <section id="about"><About /></section>
      <Skills />
      <section id="services"><Services /></section>
      <section id="contact"><Contact /></section>
    </main>
  );
}
