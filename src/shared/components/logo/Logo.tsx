import { Image } from "@mantine/core";
import LogoIcon from "@/assets/svg/logo.svg";
import { Link } from "@tanstack/react-router";
import Frame from "@/assets/Frame.png";


const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={`${className} flex items-center`}>
      <div className="flex h-full items-center justify-center gap-1">
        <img src={Frame} alt="Logo frame" className="h-8 w-15" />
        <span className="text-2xl font-bold">
          <Link to="/">WhoNeed?</Link>
        </span>
      </div>
    </div>
  );
};

export default Logo;
