import { Button } from "@/components/ui/button";
import { MapPinned, ScanQrCode, Users } from "lucide-react";
import Image from "next/image";


export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex items-center gap-2">
        <Image src="/keptly.svg" alt="Keptly" width={35} height={36} />
      </header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold">
          Dites adieu à Excel grâce à Keptly
        </h1>
        <p className="text-lg">
          Gérez votre inventaire et vos équipements avec une interface intuitive et moderne.
        </p>
        <section className="flex items-center gap-4">
          <ScanQrCode className="h-8 w-8"/>
          <div>
            <h2>Scannez le QR Code</h2>
            <p>
            Suivez vos inventaires facilement en scannant le QR code avec votre smartphone.
            </p>
          </div>
        </section>
        <section className="flex items-center gap-4">
        <Users  className="h-8 w-8"/>
          <div>
            <h2>Gérez vos équipements au sein de votre entreprise</h2>
            <p>
            Ayez le controle sur vos inventaires et vos équipements au sein de votre entreprise.
            </p>
          </div>
        </section>

        <section className="flex items-center gap-4">
          <MapPinned className="h-8 w-8"/>
          <div>
            <h2>Suivez vos inventaires</h2>
            <p>
            Gardez un oeil sur vos inventaires et vos équipements avec une interface intuitive et moderne.
            </p>
          </div>
        </section>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <Button>Soyez les premiers à essayer Keptly</Button>

      </footer>
    </div>
  );
}
