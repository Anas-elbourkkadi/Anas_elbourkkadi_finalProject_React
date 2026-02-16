import ImgAbout from "../../../assets/images1/images/shopy4.webp";


export const MainAbout = () => {
    return (
        <div className="grid md:grid-cols-12   px-10 gap-8 capitalize  ">
            <div className="overflow-hidden md:col-span-4 w-full h-[88%] group">
                <img className="group-hover:scale-110 duration-500 object-cover" src={ImgAbout} alt="imgabout" loading="lazy" />
            </div>

            <div className="md:col-span-8 flex flex-col  gap-8 py-8 text-primeryC">
                <h2 className="text-3xl text-[#3d3d3d]">Our story</h2>
                <p className="w-[95%]">
                    Phasellus egestas nisi nisi, lobortis ultricies risus semper nec.
                    Vestibulum pharetra ac ante ut pellentesque.
                    Curabitur fringilla dolor quis lorem accumsan,
                    vitae molestie urna dapibus.
                    Pellentesque porta est ac neque bibendum viverra.
                    Vivamus lobortis magna ut interdum laoreet.
                    Donec gravida lorem elit, quis condimentum ex semper sit amet.
                    Fusce eget ligula magna. Aliquam aliquam imperdiet sodales.
                    Ut fringilla turpis in vehicula vehicula.
                    Pellentesque congue ac orci ut gravida.
                    Aliquam erat volutpat.
                    Donec iaculis lectus a arcu facilisis,
                    eu sodales lectus sagittis.
                    Etiam pellentesque, magna vel dictum rutrum,
                    neque justo eleifend elit,
                    vel tincidunt erat arcu ut sem.
                    Sed rutrum, turpis ut commodo efficitur,
                    quam velit convallis ipsum, et maximus enim ligula ac ligula.
                    Vivamus tristique vulputate ultricies. Sed vitae ultrices orci.
                </p>
                <div className="ms-1 ps-6 border-s-4 border-[#e6e6e6]">
                    <p >
                        Creativity is just connecting things.
                        When you ask creative people how they did something,
                        they feel a little guilty because they didn't really do it,
                        they just saw something. It seemed obvious to them after a while.
                    </p>
                    <p >- Steve Job’s</p>
                </div>
            </div>

        </div>
    )
}