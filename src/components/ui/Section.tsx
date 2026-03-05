import { cn } from "@/lib/utils";
import Container from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  eyebrow?: string;
  alt?: boolean;
  id?: string;
  narrow?: boolean;
}

export default function Section({
  children,
  className,
  eyebrow,
  alt,
  id,
  narrow,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 md:py-28",
        alt ? "bg-[#F0F0EE]" : "bg-transparent",
        className
      )}
    >
      <Container narrow={narrow}>
        {eyebrow && (
          <p className="mb-5 font-body text-label font-medium uppercase tracking-widest text-brand-muted">
            {eyebrow}
          </p>
        )}
        {children}
      </Container>
    </section>
  );
}
