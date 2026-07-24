"use client";

type ContinueButtonProps = {
  onClick: () => void;
};

export default function ContinueButton({
  onClick,
}: ContinueButtonProps) {
  return (
    <button
      onClick={onClick}
      className="
        group
        rounded-2xl
        bg-gradient-to-r
        from-purple-600
        to-fuchsia-600
        px-10
        py-4
        text-lg
        font-bold
        text-white
        shadow-[0_0_30px_rgba(168,85,247,.5)]
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-[0_0_50px_rgba(168,85,247,.8)]
        active:scale-95
      "
    >
      <span className="flex items-center gap-2">
        Continue
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </span>
    </button>
  );
}