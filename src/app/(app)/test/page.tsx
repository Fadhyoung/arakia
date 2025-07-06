export default function TestPage() {
    return (
      <div className="relative h-screen bg-red-50 p-10">
  
        {/* Jumbotron - full width and most of height */}
        <div className="bg-white border shadow-xl rounded-xl h-[80%] w-full p-10">
          <div className="w-full h-full bg-blue-200">
            Jumbotron Image or Content
          </div>
        </div>
  
        {/* Card - absolute position to overlap bottom-left of jumbotron */}
        <div className="absolute bottom-10 left-10 w-1/3 bg-sky-200 p-6 border rounded-xl shadow-lg">
          Card Content
        </div>
      </div>
    );
  }
  