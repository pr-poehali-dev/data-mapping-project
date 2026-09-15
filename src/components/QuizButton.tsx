import Icon from "./ui/icon"

const QUIZ_URL = "https://app.diaforms.ru/f/unrff3q6drrw"

interface QuizButtonProps {
  label?: string
  className?: string
  variant?: "solid" | "outline"
}

export function QuizButton({
  label = "Рассчитать стоимость",
  className = "",
  variant = "outline",
}: QuizButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm tracking-wide transition-colors duration-300 group"
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-foreground hover:bg-foreground hover:text-background"

  return (
    <a
      href={QUIZ_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      {label}
      <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
    </a>
  )
}

export default QuizButton
