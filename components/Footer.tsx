import ButtonImpressum from "./Buttons/Impressum";
import ButtonContact from "./Buttons/Contact";


export default function Footer() {
  return (
    <nav className="w-full sm:flex border-t h-16 mt-10 max-w-6xl hidden">
    <div className="w-full flex space-x-10 items-center p-5 text-sm justify-start">
      </div>
      <div className="w-full flex space-x-10 items-center p-5 text-sm justify-end">
      <ButtonContact/>
      <ButtonImpressum/>
    </div>
  </nav>
  );
}
