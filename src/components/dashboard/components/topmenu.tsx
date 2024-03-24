import { MainNav } from "@/components/dashboard/components/main-nav"
import TeamSwitcher from "@/components/dashboard/components/team-switcher"

export function Topmenu() {
  return (
    <div className="border-b">
        <div className="flex h-16 items-center px-4">
        <TeamSwitcher />
        <MainNav className="mx-6" />
        </div>
    </div>
  )
}