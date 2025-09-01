import { GiSunflower } from "react-icons/gi";

export default function FlowerIcon() {
  return (
    <GiSunflower
      className="h-5 w-5 text-neutral-200 animate-spin"
      style={{ animationDuration: "7000ms" }}
      aria-hidden
    />
  );
}
