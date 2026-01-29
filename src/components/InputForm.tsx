import { useGlobalStateContext } from "../lib/hooks";

export default function InputForm() {
  const { number, setNumber, inputRef } = useGlobalStateContext();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement, HTMLInputElement>,
  ): void => {
    const val: string = e.target.value;
    // Regex: only numbers, max 4 digits
    if (/^\d{0,4}$/.test(val)) {
      setNumber(val);
    }
  };

  return (
    <form className="flex w-full justify-center ">
      <input
        id="number-input"
        ref={inputRef}
        type="text"
        inputMode="numeric"
        value={number}
        onChange={handleInputChange}
        placeholder="Enter number from 1 to 9999"
        className="block h-14 w-152.5 rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-900"
      />
    </form>
  );
}
