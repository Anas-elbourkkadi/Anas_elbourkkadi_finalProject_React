import DataBlog from '../../../constant/dataBlogs.json';

export const Blogs = () => {
    return (
        <section className=" my-20">
            <h2 className="text-center uppercase font-black text-4xl">our blogs</h2>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-8 px-10 mt-10">
                {
                    DataBlog.map((e, i) =>
                        <div key={i} className="space-y-3 group">
                            <div className="overflow-hidden">
                                <img className="group-hover:scale-110 duration-700" src={e.blog} alt="img" loading="lazy" />
                            </div>
                            <h4 className="text-[20px]">{e.title} </h4>
                            <p>{e.des1}</p>
                            <p className="text-primeryC">
                                {e.des2}
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}