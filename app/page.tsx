import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="mx-auto p-4 max-w-2xl">
        <h3 className="font-semibold text-white mb-2">Reuters Investigates &gt;</h3>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          China is sending its world-beating auto industry into a tailspin
        </h1>
        <img
          src="https://images.droidsans.com/wp-content/uploads/2025/05/5TEMPLATE-WEB-1085x568.png"
          alt="The Xiaomi electric SUV YU7 is unveiled in Beijing"
          className="w-full h-64 md:h-80 object-cover rounded mb-3"
        />
        <p className="text-gray-200 mb-4">
          Government policies that prioritize production targets over market demand have led to overinvestment by carmakers. The resulting glut of vehicles has created lose-lose transactions throughout the sales chain, and spawned a variety of irregular practices.
        </p>
        <span className="text-gray-400 text-xs block mb-2">
          The Xiaomi electric SUV YU7 is unveiled in Beijing. REUTERS/Florence Lo/File Photo
        </span>
        <span className="text-gray-500 text-sm">9 hours ago</span>
      </div>
    </div>
  );
}