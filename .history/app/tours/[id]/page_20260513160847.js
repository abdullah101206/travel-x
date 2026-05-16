export default function Page({ params }) {
  const id = params?.id || "";

  return (
    <div className="max-w-4xl mx-auto p-8">
      
      <h1 className="text-3xl font-bold mb-4">
        {id.replaceAll("-", " ")}
      </h1>

      <p className="text-gray-600 mb-6">
        This is a beautiful travel destination with amazing views, culture, and experiences.
      </p>

    </div>
  );
}