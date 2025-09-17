import Image from "next/image";
import Navbar from "./components/navbar";

export default function Home() {
  const newsList = [
    {
      category: "Reuters Investigates",
      title: "China is sending its world-beating auto industry into a tailspin",
      img: "https://picsum.photos/id/1011/1085/568", // random placeholder
      caption: "The Xiaomi electric SUV YU7 is unveiled in Beijing. REUTERS/Florence Lo/File Photo",
      content:
        "Government policies that prioritize production targets over market demand have led to overinvestment by carmakers. The resulting glut of vehicles has created lose-lose transactions throughout the sales chain, and spawned a variety of irregular practices.",
      time: "9 hours ago",
    },
    {
      category: "Tech Today",
      title: "Apple launches new MacBook Pro with M4 chip",
      img: "https://picsum.photos/id/180/1085/568", // placeholder
      caption: "Apple unveils the new MacBook Pro featuring the M4 chip.",
      content:
        "The latest MacBook Pro brings groundbreaking performance improvements and longer battery life. Early reviewers praise the new M4 chip for unmatched speed and efficiency.",
      time: "5 hours ago",
    },
    {
      category: "Sports Update",
      title: "Barcelona wins La Liga with thrilling comeback",
      img: "https://picsum.photos/id/102/1085/568", // placeholder
      caption: "Barcelona celebrates a last-minute goal that secured their La Liga title.",
      content:
        "Barcelona managed a spectacular comeback in the final match of the season, overcoming a two-goal deficit to clinch the La Liga championship. Fans erupted in celebration across the city.",
      time: "2 hours ago",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="max-w-2xl mx-auto p-4 space-y-10">
        {newsList.map((news, idx) => (
          <div key={idx}>
            {/* <h3 className="font-semibold text-white mb-2">{news.category} &gt;</h3> */}
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">{news.title}</h1>

            <div className="relative w-full h-64 md:h-80 mb-3 rounded overflow-hidden">
              <Image src={news.img} alt={news.title} fill className="object-cover" />
            </div>

            <span className="text-gray-400 text-xs block mb-2">{news.caption}</span>
            <p className="text-gray-200 mb-4">{news.content}</p>
            {/* <span className="text-gray-500 text-sm">{news.time}</span> */}
          </div>
        ))}
      </div>
    </div>
  );
}