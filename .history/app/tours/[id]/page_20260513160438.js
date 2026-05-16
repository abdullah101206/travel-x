export default function Page({ params }) {
  return (
    <div className="max-w-4xl mx-auto p-8">
      
      <h1 className="text-3xl font-bold mb-4">
        {params.id.replaceAll("-", " ")}
      </h1>

      <p className="text-gray-600 mb-6">
        This is a beautiful travel destination with amazing views, culture, and experiences. 
        Perfect for tourists who love adventure, relaxation, and exploration.
      </p>

      <div className="bg-gray-100 p-5 rounded-xl">
        <h2 className="font-bold mb-2">Why visit?</h2>
        <ul className="list-disc pl-5 text-gray-700">
          <li>Top tourist attractions</li>
          <li>Great food & culture</li>
          <li>Memorable travel experience</li>
        </ul>
      </div>

    </div>
  );
}