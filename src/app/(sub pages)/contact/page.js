import Image from "next/image";
import bg from "../../../../public/background/contact-background.png"

export default function Contact() {
  return (
    <>
      <Image src={bg} alt="background image" className="-z-50 w-full fixed top-0 left-0 h-full object-center object-cover opacity-25" />

      <article className="relative w-full flex flex-col items-center justify-center space-y-8">
        <div className="flex flex-col items-center justify-center space-y-6 w-3/4">
            <h1 className="text-accent font-semibold text-center text-4xl capitalize">
                Contact Me
            </h1>
            <p>
            Step into the circle of enchantment and weave your words into the fabric of the cosmos. Whether you seek to conjure collaborations, unlock mysteries, or simply share tales of adventure, your messages are treasured scrolls within this realm. Use the form below to send your missives through the ethereal network, and await the whisper of magic in response.
            </p>
        </div>
      </article>
    </>
  );
}
