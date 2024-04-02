import React from 'react';
import { Link } from 'react-router-dom';
// import Navbar from '../components/Navbar';
import Layout from "../components/Layout";
import movie1 from "../assets/movie-1.jpg";
import movie2 from "../assets/movie-2.jpg";

const MovieDetails = ({title}) => {
    
    return (
        <>
            {/* <Link to='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-full">Go back</Link> */}
            <Layout>
                <div className="pb-">
                    <div className="border-b py-6">
                    <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
                        <h1 className="text-xl font-semibold ">Movie Detail</h1>
                        <div className="text-sm breadcrumbs">
                        <ul>
                            <li>
                            <Link to="/">Home</Link>
                            </li>
                            <li>Movie Detail</li>
                        </ul>
                        </div>
                    </div>
                    </div>
                    <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-col w-full lg:flex-row">
                        <div className="grid flex-shrink-0 place-items-center my-20 lg:pr-6">
                        <div className="carousel max-w-[400px] rounded-box">
                            <div id="slide1" className="carousel-item relative">
                            <img
                                src={movie1}
                                className="w-[400px] h-[500px] object-cover"
                                alt=""
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">
                                ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                ❯
                                </a>
                            </div>
                            </div>
                            <div id="slide2" className="carousel-item relative">
                            <img
                                src={movie1}
                                className="w-[400px] h-[500px] object-cover"
                                alt="movie2"
                            />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">
                                ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                ❯
                                </a>
                            </div>
                            </div>
                        </div>
                        <div className="flex justify-center w-full mt-3 py-2 gap-2">
                            <a href="#slide1" className="btn btn-xs">
                            1
                            </a>
                            <a href="#slide2" className="btn btn-xs">
                            2
                            </a>
                        </div>
                        </div>
                        <div className="divider lg:divider-horizontal" />
                        <div className="grid flex-shrink my-20">
                        <div className="flex flex-col space-y-5 lg:pl-4 ">
                            <h2 className="text-2xl font-bold">
                            ธี่หยด <div className="badge badge-accent text-xs">Horror</div>
                            </h2>
                            <p className="text-lg">
                            <h3 >Director:วีวัฒน์ วันทา</h3> 
                            </p>
                            <h3 className=" text-xl font-semibold">
                                121 mins
                            </h3>
                            <p>
                            <span className="">language:</span> TH
                            </p>
                            <button type="button" className="btn btn-primary w-[200px]">
                            Showtimes
                            </button>
                            {/* Tabs */}
                            {/* <div className="tabs pt-12">
                            <button
                                type="button"
                                className="tab tab-lg tab-lifted tab-active"
                            >
                                Description
                            </button>
                            <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                                Cinemas
                            </button>
                            <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                                Cast
                            </button>
                            <button type="button" className="tab tab-lg tab-lifted text-gray-400">
                                Reviews
                            </button>
                            </div> */}
                            <div role="tablist" className="tabs tabs-bordered">
                                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Description" />
                                <div role="tabpanel" className="tab-content p-5">
                                    <p className='text-indent: 2.5em'>
                                    <span className="text-2xl font-bold">Description : </span>ธี่หยด ภาพยนตร์ไทยแนวสยองขวัญ ที่ดัดแปลงจากนวนิยายชื่อ ธี่หยด...แว่วเสียงครวญคลั่ง ของ กฤตานนท์ หรือ คุณกิตติศักดิ์ กิตติวิรยานนท์ ผู้เป็นบุตรชายเจ้าของเรื่องราว เล่าถึงความลึกลับชวนขนลุกของเสียง… ธี่หยด ที่ถูกเขียนเล่าบนกระทู้พันทิปจนกลายเป็นนิยายดัง ก่อนที่คุณกิตจะนำมาเล่าอีกครั้งในรายการ The Ghost Radio ให้ผู้คนได้ติดตามความหลอนของเรื่องราวเสียงความหลอนยามค่ำคืน จะกลายเป็นภาพยนตร์สยองขวัญ มาพร้อมเสียง ธี่หยด ชวนขนหัวลุกที่หลายคนอยากได้ยิน เรื่องราวเหตุการณ์ 50 กว่าปีก่อน ปี 2515 เรื่องราวประหลาดที่เกิดขึ้นกับครอบครัวหนึ่ง
                                    
                                    </p></div>

                                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cinemas" checked />
                                <div role="tabpanel" className="tab-content p-5">top 2</div>

                                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Cast" />
                                <div role="tabpanel" className="tab-content p-5">
                                <span className="text-2xl font-bold">cast:</span>Swann Arlaud, Sandra Hüller, Antoine Reinartz
                                    </div>

                                <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label="Reviews" />
                                <div role="tabpanel" className="tab-content p-5">Tab content 4</div>
                            </div>
                            
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </Layout>   
        </>
    );    
}
export default MovieDetails