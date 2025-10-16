import { Image } from "@mantine/core";
import LogoIcon from "@/assets/svg/logo.svg";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className + " flex items-center"}>
      <div className="flex h-full items-center justify-center gap-1">
        <Image className="h-full" src={LogoIcon} alt="Brand Logo" />
        <span className="text-2xl font-bold">FilmHub</span>
      </div>
    </div>
  );
};

export default Logo;
