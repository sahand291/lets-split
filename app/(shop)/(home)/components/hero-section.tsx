import Image from "next/image";

export function HeroSection() {
  return (
    <section className="container mx-auto bg-background text-foreground flex items-center justify-between px-5">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">
          کیبورد دوتیکه!
        </h1>
        <p className="text-muted-foreground text-xl">
          کیبورد دو تیکه خودت رو بساز!
          <br />
          دو مدل معروف کیبورد دوتیکه، corne و lily58.
        </p>
      </div>
      <div>
        <Image
          src="/img/home/lily58.webp"
          alt="lily58"
          width="500"
          height="500"
        />
      </div>
    </section>
  );
}
