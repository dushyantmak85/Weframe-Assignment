import { Circle } from 'lucide-react';
import { Check } from 'lucide-react'; // Import the Check icon from lucide-react


type CheckMarkProps = {
    margin_left?: number;
    bg?: string;
  };


export default function CircleIcon({stroke="#D9D9D9",fill="#D9D9D9", size=10}: {stroke?: string, fill?: string, size?: number}) { {
    return (
        <Circle fill={`${fill}`} stroke= {`${stroke}`} size={`${size}`}  />
  );
}}


export function CheckMark({ margin_left , bg = '#0A9952' }: CheckMarkProps) {
    return (
      <div
        className="w-4 h-4 rounded-full flex items-center justify-center"
        style={{ marginLeft: `${margin_left}rem`, backgroundColor: bg }}
      >
        <Check color="white" size={12} />
      </div>
    );
  }