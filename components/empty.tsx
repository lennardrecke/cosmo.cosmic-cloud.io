import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative h-24 md:h-32 aspect-square">
        <Image
          alt="Empty"
          fill
          src="/empty.png"
          className="rounded-2xl shadow-md"
        />
      </div>
      <p className="text-muted-foreground text-lg text-center mt-2">{label}</p>
    </div>
  );
};
