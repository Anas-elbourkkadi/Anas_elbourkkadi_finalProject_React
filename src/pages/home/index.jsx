import { ImagesCard } from "./parties/cardsImages";
import { Prodects } from "./parties/prodects";
import MyCarousel from "./parties/slider";




export const IndexHome = () => {
    return (
        <main>
            <MyCarousel />
            <ImagesCard/>
            <Prodects/>
        </main>
    )
}