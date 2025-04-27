import { Outlet } from "react-router-dom";
import logo from "assets/logo_clean.png";
import logo_text from "assets/logo_text.png";
import translate from "core/helpers/translate";

const LoginLayout = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
      <div className="left bg-slate-700 flex justify-center items-center flex-col relative p-4 text-center">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 hidden md:block">
          <div className="w-[45vw] aspect-square rounded-full bg-slate-800 opacity-20 animate-pulse absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-20 delay-[2000ms]" />
          <div className="w-[40vw] aspect-square rounded-full bg-slate-800 opacity-20 animate-pulse absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-12 delay-[1500ms]" />
          <div className="w-[35vw] aspect-square rounded-full bg-slate-800 opacity-20 animate-pulse absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-8 delay-[1000ms]" />
          <div className="w-[30vw] aspect-square rounded-full bg-slate-800 opacity-20 animate-pulse absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-4 delay-[5000ms]" />
          <div className="w-[25vw] aspect-square rounded-full bg-slate-800 opacity-20 animate-pulse absolute left-1/2 -translate-x-1/2 -translate-y-1/2 -top-2" />
        </div>
        <img
          alt="HigherME Logo"
          src={logo}
          className="lg:h-72 h-32 w-auto mb-4 z-10 relative"
        />
        <img
          alt="HigherME Text"
          src={logo_text}
          className="lg:h-16 h-8 w-auto mb-4 z-10 relative"
        />

        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 z-10 relative">
          {translate("login.welcome")}
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-8 tracking-wide italic z-10 relative">
          {translate("login.subtitle")}
        </h2>
      </div>

      <div className="right flex justify-center items-center flex-col bg-slate-400">
        <Outlet />
      </div>
    </div>
  );
};

export default LoginLayout;
