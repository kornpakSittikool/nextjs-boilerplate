import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto p-4">
        <div className="flex flex-col md:flex-row md:items-start gap-8 max-w-6xl mx-auto">
          {/* ข่าวฝั่งซ้าย */}
          <div className="md:w-1/2">
            <h3 className="font-semibold text-white mb-2">Reuters Investigates &gt;</h3>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              China is sending its world-beating auto industry into a tailspin
            </h1>
            <p className="text-gray-200 mb-4">
              Government policies that prioritize production targets over market demand have led to overinvestment by carmakers. The resulting glut of vehicles has created lose-lose transactions throughout the sales chain, and spawned a variety of irregular practices.
            </p>
            <span className="text-gray-300 text-sm">9 hours ago</span>
          </div>
          {/* รูปภาพฝั่งขวา */}
          <div className="md:w-1/2 flex flex-col">
            <img
              src="https://images.droidsans.com/wp-content/uploads/2025/05/5TEMPLATE-WEB-1085x568.png"
              alt="The Xiaomi electric SUV YU7 is unveiled in Beijing"
              className="w-full h-64 md:h-80 object-cover rounded"
            />
            <span className="text-xs text-gray-300 mt-2">
              The Xiaomi electric SUV YU7 is unveiled in Beijing. REUTERS/Florence Lo/File Photo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}