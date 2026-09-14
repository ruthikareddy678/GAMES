import { SortingGame } from "@/components/sorting-game"
import { Shapes } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-svh bg-gradient-to-b from-muted/50 to-background px-4 py-8 sm:py-12">
      <header className="mx-auto mb-8 flex max-w-4xl flex-col items-center gap-2 text-center">
        <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground shadow-sm">
          <Shapes className="size-6" aria-hidden="true" />
        </span>
        <h1 className="text-2xl font-bold tracking-tight text-balance sm:text-3xl">
          Picture Sorting Game
        </h1>
        <p className="max-w-md text-pretty text-sm text-muted-foreground">
          Tap a picture, then tap the group it belongs to. Sort them all correctly
          across 10 rounds to beat your best score.
        </p>
      </header>
      <SortingGame />
    </main>
  )
}
