import Swal from "sweetalert2";
import Banner from "./Banner";
import { Helmet } from "react-helmet";
import UseAxios from "../hooks/UseAxios";
import { useQuery } from "@tanstack/react-query";
import ResentBlog from "./ResentBlog";
import { AiFillFacebook, AiFillTwitterSquare, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { motion, } from "framer-motion"


const Home = () => {

    const axios = UseAxios();

    const recentBlogs = async () => {
        const res = await axios.get('/blogs?sortField=timer&&sortOrder=desc')
        return res

    }

    const { data: blogs } = useQuery({
        queryKey: ['blog',],
        queryFn: recentBlogs,
    })


    const hendleSubscribe = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        console.log(name, email);
        if (email && name) {
            return Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Your subscription has been successful',
                showConfirmButton: false,
                timer: 1500
            })
        }
    }
    return (
        <div>
            <Helmet>
                <title>Home</title>
            </Helmet>
            <div className="container w-[98%] justify-center mx-auto">
                <Banner></Banner>
                <div className="container w-[98%] justify-center mx-auto mt-16" >
                    <  motion.h1 className="text-3xl font-bold text-black text-center "
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}>Recently added blogs</motion.h1>

                    <div className="constainer w-[98%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center mx-auto mt-20"
                    >
                        {
                            blogs?.data?.slice(0, 6).map((blog) => <ResentBlog key={blog._id} blog={blog}></ResentBlog>)
                        }
                    </div>
                </div>

                <div className="conatiner w-[98%] justify-center mx-auto mt-10">
                    <div className="mt-10">
                        <  motion.h1 className="text-3xl text-black font-bold text-center"
                        initial={{opacity:0, scale:0}}
                        whileInView={{opacity:1, scale:1}}
                        transition={{duration:0.6}}>Trending</ motion.h1>

                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16">
                        {
                            blogs?.data?.slice(0, 6).map((blog) => <ResentBlog key={blog._id} blog={blog}></ResentBlog>)
                        }
                    </div>
                </div>
                <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                >
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/kckbw2D/3227422.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Contact us</h1>
                                <h1 className="mb-5 text-5xl font-bold">Consultations are free!</h1>

                                <p className="mb-5">Platea proident! Aute, rerum sociosqu numquam placerat, rerum molestias doloribus incidunt occaecati placeat, repellendus mus optio, totam cons.</p>
                                <div className="flex items-center text-center gap-10 ms-20">
                                    <span className="text-4xl text-blue-500"><AiFillFacebook></AiFillFacebook></span>
                                    <span className="text-4xl text-blue-500"><AiFillTwitterSquare></AiFillTwitterSquare></span>
                                    <span className="text-4xl text-red-500"><AiFillInstagram></AiFillInstagram></span>
                                    <span className="text-4xl text-red-500"><AiFillLinkedin></AiFillLinkedin></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>


                <motion.section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-3xl"
                 initial={{ opacity: 0, scale: 0 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 transition={{ duration: 0.6 }}>
                    <div className=" items-center p-10">
                        <h1 className="text-3xl text-left font-bold text-white">Subscribe to blog writer newsletter and stay updated.</h1>
                        <p className="text-xl text-left  font-medium text-white mt-8">Dont miss anything. Get all the latest posts delivered straight to your inbox. Its free!</p>
                    </div>
                    <div>
                        <div className="card ">
                            <form onSubmit={hendleSubscribe} className="card-body p-5">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text"
                                        name="name"
                                        placeholder="Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email"
                                        name="email"
                                        placeholder="Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control mt-6">
                                    <button type="submit" className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </motion.section>
            </div>

            <footer className="footer p-10 bg-base-200 text-base-content mt-20 ">
                <aside>
                    <img className="text-xl w-24 h-20 " src="https://i.ibb.co/TwLNCXm/Blog-2.png" alt="" />
                </aside>
                <nav>
                    <header className="footer-title">Features</header>
                    <a className="link link-hover">Style Guide</a>
                    <a className="link link-hover">Tags</a>
                    <a className="link link-hover">Authors</a>
                    <a className="link link-hover">Features</a>
                    <a className="link link-hover">Contact</a>
                </nav>
                <nav>
                    <header className="footer-title">Pages</header>
                    <a className="link link-hover">Membership</a>
                    <a className="link link-hover">Sign in</a>
                    <a className="link link-hover">Sign up</a>
                    <a className="link link-hover">All blog</a>
                    <a className="link link-hover">Wishlist</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className=" items-center p-4 bg-base-200  text-content">
                <p className="text-center">Copyright © 2023 - All right reserved</p>
            </footer>
        </div>
    );
};

export default Home;