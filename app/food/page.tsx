import Image from "next/image";
import Navbar from "../components/navbar";
import { foods } from "../shared/datas/food";

export default function Food() {
    const newList = foods;
    return (
        <div>
            <Navbar />
            <div className="max-w-2xl mx-auto p-4 space-y-10">
                {foods.map((news, idx) => (
                    <div key={idx}>
                        {/* <h3 className="font-semibold text-white mb-2">{news.category} &gt;</h3> */}
                        <h1 className="text-2xl md:text-2xl font-bold text-white mb-4 leading-tight">
                           {news.category}
                        </h1>

                        <div className="relative w-full mb-3 rounded overflow-hidden">
                            <Image
                                src={news.img}
                                alt={news.title}
                                width={1080}
                                height={600}
                                className="w-full h-auto rounded"
                                sizes="(max-width: 768px) 100vw, 700px"
                            />
                        </div>

                        <span className="text-gray-400 text-xs block mb-2">
                            {news.caption}
                        </span>

                        {/* เนื้อหาหลัก */}
                        <p className="text-gray-200 mb-4 whitespace-pre-line">
                            {news.content}
                        </p>

                        {/* ถ้ามี content2 ค่อยแสดงต่อ */}
                        {news.content2 && (
                            <p className="text-gray-200 mb-4 whitespace-pre-line">
                                {news.content2}
                            </p>
                        )}

                    </div>
                ))}
            </div>
        </div>
    );

}