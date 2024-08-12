import PortfolioComponent from "../components/Portfolio"
import Resume from "../components/Resume"

export default function Portfolio() {
    return (
        <section className="pt-16 px-6 pb-6">
            <PortfolioComponent />
            <Resume />
        </section>
    )
}