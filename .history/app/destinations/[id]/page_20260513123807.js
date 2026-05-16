export default function Page({ params }) {
  return (
    <div className="min-h-screen flex items-center justify-center text-3xl font-bold">
      ID IS: {params?.id}
    </div>
  );
}