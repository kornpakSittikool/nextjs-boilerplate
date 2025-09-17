import Navbar from "../components/navbar";

export default function Sport() {
    return (
        <div>
            <Navbar />
            <div className="mx-auto p-4 max-w-2xl">
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">SPORTS</h1>
                <p className="text-gray-200 mb-4">
                    ข่าวกีฬา อัปเดตล่าสุดที่นี่!
                </p>
            </div>
        </div>
    );
}