export default function HallOfFameCard({ image, name, location, story, date, link }) {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-2xl overflow-hidden p-4 h-full">
      <img
        src={image}
        alt={name}
        className="w-full md:w-1/2 h-64 object-contain rounded-xl "
      />
      <div className="w-full md:w-1/2 p-4 text-center md:text-left">
        <h3 className="text-md md:text-xl font-bold text-gray-800">{name}</h3>
        {location && <p className="text-sm text-gray-500 mt-1">📍 {location}</p>}
        <p className="mt-3 md:text-md text-gray-600 italic h-32 overflow-y-auto">"{story}"</p>
        <p className="mt-3 text-sm text-gray-500">{date}</p>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer">
            <button className="mb-4 mt-4 px-4 py-2 bg-[#3b4b9c] text-white rounded-xl hover:bg-[#303b71] transition">
              View Interaction
            </button>
          </a>
      )}
      </div>
    </div>
  );
}
