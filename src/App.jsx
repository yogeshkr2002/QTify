import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import Songs from "./components/Songs/Songs";
export default function App(){
  return(<>
    <Navbar />
    <Hero />
    <Section title="Top Albums" endpoint="/albums/top" metric="follows" showToggle/>
    <Section title="New Albums" endpoint="/albums/new" metric="follows" showToggle/>
    <Songs />
  </>);
}
