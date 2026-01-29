import { useGlobalStateContext } from "../lib/hooks";
import { cn } from "../lib/utils";

export default function Button() {
  const { number, svgRef } = useGlobalStateContext();

  // Download SVG function
  const downloadImage = () => {
    if (!svgRef.current) return;

    const serializer = new XMLSerializer();
    const svgString = serializer.serializeToString(svgRef.current);

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `rune-${number || "0"}.svg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={downloadImage}
      disabled={!number}
      className={cn(
        "w-152.5 mx-auto rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs cursor-pointer transition-[all_0.2s,box-shadow_0.1s]",
        {
          "hover:bg-sky-700": number !== undefined,
          "bg-gray-400 cursor-not-allowed": !number,
        },
      )}
    >
      Download SVG
    </button>
  );
}
