import { Blogs } from "./parties/blogs";
import { Boxes } from "./parties/boxes";
import { ImagesCard } from "./parties/cardsImages";
import { Prodects } from "./parties/prodects";
import { Follow } from "./parties/SectionFollow";
import MyCarousel from "./parties/slider";




export const IndexHome = () => {
    return (
        <main>
            <MyCarousel />
            <ImagesCard/>
            <Prodects/>
            <Boxes/>
            <Blogs/>
            <Follow/>
        </main>
    )
}