import { Image } from "@mantine/core";
import LogoIcon from "@/assets/svg/logo.svg";
import { Link } from "@tanstack/react-router";

const Logo = ({ className }: { className?: string }) => {
  return (
    <div className={className + " flex items-center"}>
      <div className="flex h-full items-center justify-center gap-1">
       <span className="text-2xl font-bold">
          <Link to="/login">WhoNeed?</Link>
        </span>
      </div>
    </div>
  );
};

export default Logo;
