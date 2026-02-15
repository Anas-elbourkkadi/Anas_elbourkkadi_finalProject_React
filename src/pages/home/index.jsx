import { Boxes } from "./parties/boxes";
import { ImagesCard } from "./parties/cardsImages";
import { Prodects } from "./parties/prodects";
import MyCarousel from "./parties/slider";




export const IndexHome = () => {
    return (
        <main>
            <MyCarousel />
            <ImagesCard/>
            <Prodects/>
            <Boxes/>
        </main>
    )
}