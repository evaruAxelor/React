import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Work from "./Components/Work";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

export default function App() {
  return (
  <>
    <Navbar />

    <section>
        <div className="main" id="home">
            <div className="img">
                <img src="./images/boy.jpeg" alt="boy-image" />
            </div>
            <div className="main-text">
                <h1>Hi I am Stanley !</h1>
            </div>
            <div className="main-para">
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum ut fuga debitis reiciendis numquam laudantium, corporis, aut accusantium magni asperiores quae fugiat repellendus incidunt sit deserunt! Ipsum magnam, cum illum id dignissimos commodi harum obcaecati consequuntur impedit dicta molestias. Cumque.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, earum repudiandae impedit atque iste quam voluptates a suscipit deleniti at quae adipisci aperiam inventore dolores? Officiis quidem optio debitis ea.</p>
            </div>
        </div>
    </section>

    <About />
    <Work />
    <Contact />
    <Footer />
  </>
  )
}
