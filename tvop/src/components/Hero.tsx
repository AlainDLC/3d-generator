import AvatarCanvas from "./AvatarCanvas";

export default function Hero() {
  return (
    <section className="bg-[url('assets/kawa.jpg')] bg-center bg-no-repeat bg-cover relative mix-blend-screen z-0 h-screen w-screen">
      <AvatarCanvas />
    </section>
  );
}
