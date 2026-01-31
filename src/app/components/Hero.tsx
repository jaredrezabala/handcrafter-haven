import CTA from "./CTA";
import Features from "./Features";
import Footer from "./Footer";
import HeroBtns from "./HeroBtns";
import Nav from "./Nav";
import Stats from "./Stats";

export default function Hero() {
    return (
        <div>
            <section className="hero" id="home">
                <div className="hero-background"></div>
                <div className="hero-container">
                    <div className="hero-content">
                        <Nav />
                        <h1>Discover Unique<br /><span className="font-body text-sm text-charcoal/70">Handcrafted</span><br />Treasures</h1>
                        <p>
                            Connect with talented artisans and discover one-of-a-kind handmade items.
                            Every purchase supports independent creators and sustainable craftsmanship.
                        </p>
                        <HeroBtns />
                        <Features/>
                        <Stats />
                        <CTA />
                        <Footer />
                    </div>
                    <div className="hero-image">
                        <div className="hero-grid">
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}