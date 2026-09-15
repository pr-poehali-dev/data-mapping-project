import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog"
import Icon from "./ui/icon"

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
  const [open, setOpen] = useState(false)

  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm tracking-wide transition-colors duration-300 group"
  const styles =
    variant === "solid"
      ? "bg-foreground text-background hover:bg-foreground/90"
      : "border border-foreground hover:bg-foreground hover:text-background"

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={`${base} ${styles} ${className}`}>
        {label}
        <Icon name="ArrowRight" size={16} className="transition-transform group-hover:translate-x-1" />
      </button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-2xl w-[95vw] p-0 overflow-hidden">
          <DialogHeader className="px-6 pt-6 pb-3">
            <DialogTitle className="text-xl font-medium">Анкета для расчёта стоимости</DialogTitle>
          </DialogHeader>
          <div className="px-4 pb-4">
            <iframe
              src="https://app.diaforms.ru/f/unrff3q6drrw?embed=1"
              title="Анкета для расчёта стоимости"
              loading="lazy"
              className="w-full border-0"
              style={{ minHeight: "640px", maxHeight: "72vh" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QuizButton
