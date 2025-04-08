import TypingEffect from "./components/TypingEffect";
import WelcomeMessage from "./components/WelcomeMessage";

export default function Home() {
  return (
    <div className="h-dvh flex items-center justify-center">
      <TypingEffect myText="<Mehdi-Godefroid />" className="text-3xl"/>
    </div>
  );
}
