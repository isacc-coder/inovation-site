import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";

export function ChatWidget() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [replied, setReplied] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[min(21rem,calc(100vw-2.5rem))] border border-border bg-surface shadow-2xl">
          <div className="flex items-center justify-between gap-3 border-b border-border bg-surface-raised px-4 py-3">
            <div>
              <p className="font-display text-sm uppercase">{t.chat.title}</p>
              <p className="text-[0.68rem] text-muted-foreground">{t.chat.subtitle}</p>
            </div>
            <button
              type="button"
              aria-label={t.chat.close}
              onClick={() => setOpen(false)}
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3 px-4 py-4">
            <p className="max-w-[85%] bg-surface-raised px-3 py-2 text-sm leading-relaxed">
              {t.chat.greeting}
            </p>

            <div className="flex flex-wrap gap-2">
              {t.chat.options.map((o) => (
                <button
                  key={o}
                  type="button"
                  onClick={() => setReplied(true)}
                  className="border border-border px-3 py-1.5 text-left text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {o}
                </button>
              ))}
            </div>

            {replied && (
              <p className="max-w-[90%] bg-surface-raised px-3 py-2 text-sm leading-relaxed text-muted-foreground">
                {t.chat.reply}
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setReplied(true);
            }}
            className="flex gap-px border-t border-border bg-border"
          >
            <input
              placeholder={t.chat.placeholder}
              className="flex-1 bg-surface px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              className="bg-primary px-4 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-primary-foreground transition-opacity hover:opacity-90"
            >
              {t.chat.send}
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? t.chat.close : t.chat.open}
        onClick={() => setOpen((v) => !v)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition-opacity hover:opacity-90"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
