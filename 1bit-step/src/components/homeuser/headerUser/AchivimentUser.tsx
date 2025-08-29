const archiviments = ["F", "W"];

export default function AchivimentUser() {
  return (
    <div className="p-2 sm:p-4">
      <h4 className="font-mono text-base sm:text-lg"> Achiviment </h4>
      <div className="ml-4 flex items-center">
        {archiviments.map((a, idx) => (
          <div
            key={idx}
            className="-ml-3 grid size-8 place-content-center rounded-full bg-gray-400"
          >
            {a}
          </div>
        ))}
      </div>
    </div>
  );
}
