interface MonoTableProps {
  data: (string | number)[][];
}

export default function MonoTable({ data }: MonoTableProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="overflow-x-auto">
      <table className="w-full font-mono text-sm">
        <thead>
          <tr className="bg-neutral-200">
            {data[0].map((header, index) => (
              <th
                key={index}
                className="whitespace-nowrap px-4 py-2 text-left font-normal"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-neutral-200">
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="whitespace-nowrap px-4 py-2">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
