import ContactForm from "@/components/contact/contact-form";
import ContactList from "@/components/contact/contact-list";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center py-32 px-16 justify-center gap-4 bg-white dark:bg-black sm:items-start">
        <ContactForm />
        <ContactList />
      </main>
    </div>
  );
}
