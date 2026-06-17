import Nav from "@/components/nav";
import Cover from "@/components/cover";
import About from "@/components/about";
import Projects from "@/components/projects";
import ResearchInterests from "@/components/research-interests";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF9F6]">
      <Nav />
      <Cover />
      <About />
      <Projects />
      <ResearchInterests />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
}
