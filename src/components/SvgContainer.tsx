import { ARM_SIZE, BOTTOM_Y, CENTER_X, TOP_Y } from "../lib/constants";
import { useGlobalStateContext } from "../lib/hooks";

export default function SvgContainer() {
  const { number, svgRef } = useGlobalStateContext();

  const padNum = number.padStart(4, "0");
  const thousands = parseInt(padNum[0]);
  const hundreds = parseInt(padNum[1]);
  const tens = parseInt(padNum[2]);
  const units = parseInt(padNum[3]);

  return (
    <div className=" group my-10">
      <div className="relative bg-white border border-slate-200 rounded-xl flex items-center justify-center p-6 shadow-sm min-w-252.5 min-h-90">
        {!number && (
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-3 z-10">
            <div className="w-1 h-32 bg-slate-100 rounded-full" />
            <span className="text-slate-400 font-medium text-md">
              Enter digits to see the rune
            </span>
          </div>
        )}
        <svg
          ref={svgRef}
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className={`transition-opacity duration-500 ${number ? "opacity-100" : "opacity-0"}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Line styles */}
          <g stroke="black" strokeWidth="4" strokeLinecap="round" fill="none">
            {/* Main line */}
            <line x1={CENTER_X} y1={TOP_Y} x2={CENTER_X} y2={BOTTOM_Y} />
            <g transform={`translate(${CENTER_X}, ${TOP_Y + ARM_SIZE})`}>
              <g transform="scale(1, -1)"></g>
            </g>
            <g transform={`translate(${CENTER_X}, ${TOP_Y})`}>
              {/* Units */}
              {getDigitPathBasedOnImage(units, ARM_SIZE)}
            </g>

            <g transform={`translate(${CENTER_X}, ${TOP_Y}) scale(-1, 1)`}>
              {/* Tens*/}
              {getDigitPathBasedOnImage(tens, ARM_SIZE)}
            </g>

            <g transform={`translate(${CENTER_X}, ${BOTTOM_Y}) scale(1, -1)`}>
              {/* Hundreds */}
              {getDigitPathBasedOnImage(hundreds, ARM_SIZE)}
            </g>
            <g transform={`translate(${CENTER_X}, ${BOTTOM_Y}) scale(-1, -1)`}>
              {/* Thousands */}
              {getDigitPathBasedOnImage(thousands, ARM_SIZE)}
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

// Drawing function
function getDigitPathBasedOnImage(digit: number, size: number) {
  if (!digit) return null;

  switch (digit) {
    case 1:
      return <line x1={0} y1={0} x2={size} y2={0} />;
    case 2:
      return <line x1={0} y1={size} x2={size} y2={size} />;
    case 3:
      return <line x1={0} y1={0} x2={size} y2={size} />;
    case 4:
      return <line x1={0} y1={size} x2={size} y2={0} />;
    case 5:
      return (
        <>
          <line x1={0} y1={0} x2={size} y2={0} />
          <line x1={0} y1={size} x2={size} y2={0} />
        </>
      );
    case 6:
      return <line x1={size} y1={0} x2={size} y2={size} />;
    case 7:
      return <polyline points={`0,0 ${size},0 ${size},${size}`} />;
    case 8:
      return <polyline points={`0,${size} ${size},${size} ${size},0`} />;
    case 9:
      return <polyline points={`0,0 ${size},0 ${size},${size} 0,${size}`} />;
    default:
      return null;
  }
}
