import { useRef } from "react";

const Form = ({ addFn }: { addFn: (v: string) => void }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form>
      <input ref={inputRef} type="text" />
      <button type="button"
        onClick={() => {
          if (!inputRef.current) return;
          addFn(inputRef.current.value);
          inputRef.current.value = ""
        }}
      >
        追加
      </button>
    </form>
  );
};

export default Form;
