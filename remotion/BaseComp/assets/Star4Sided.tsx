import { useCurrentFrame } from "remotion";

export default function Star4Sided() {
  const frame = useCurrentFrame();

  return (
    <svg
      width={524}
      height={523}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute z-20 scale-50"
      style={{ rotate: `${-frame * 3}deg`, left: -100, top: -100 }}
    >
      <path
        opacity={0.1}
        d="M327 65c0-35.898-29.102-65-65-65-35.899 0-65 29.102-65 65v131.5H65.5c-35.898 0-65 29.101-65 65 0 35.898 29.102 65 65 65H197V458c0 35.898 29.102 65 65 65 35.899 0 65-29.102 65-65V326.5h131.5c35.898 0 65-29.102 65-65 0-35.899-29.102-65-65-65H327V65Z"
        fill="currentColor"
      />
    </svg>
  );
}
