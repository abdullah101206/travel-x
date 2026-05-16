export default function Page({ params }) {
  return (
    <div className="p-10 text-3xl">
      PARAM ID: {params?.id}
    </div>
  );
}