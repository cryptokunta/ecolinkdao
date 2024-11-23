import { ContactOptions } from "@/components/contact/contact-options"

export default function ContactPage() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight mb-2">Get in Touch</h1>
        <p className="text-muted-foreground">
          Have questions or want to get involved? We're here to help.
        </p>
      </div>
      <ContactOptions />
    </div>
  )
}