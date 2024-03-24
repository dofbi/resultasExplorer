"use client"

import * as React from "react"
import {
  CaretSortIcon,
  CheckIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const groups = [
  {
    label: "Candidat",
    teams: [
      {
        label: "Bassirou Diomaye Diakher Faye",
        value: "Bassirou Diomaye Diakher Faye",
      },
      {
        label: "Boubacar CAMARA",
        value: "Boubacar CAMARA",
      },
      {
        label: "Cheikh Tidiane DIEYE",
        value: "Cheikh Tidiane DIEYE",
      },
      {
        label: "Dethie FALL",
        value: "Dethie FALL",
      },
      {
        label: "Daouda NDIAYE",
        value: "Daouda NDIAYE",
      },
      {
        label: "Habib SY",
        value: "Habib SY",
      },
      {
        label: "Khalifa Ababacar SALL",
        value: "Khalifa Ababacar SALL",
      },
      {
        label: "Anta Babacar NGOM",
        value: "Anta Babacar NGOM",
      },
      {
        label: "Amadou BA",
        value: "Amadou BA",
      },
      {
        label: "Idrissa SECK",
        value: "Idrissa SECK",
      },
      {
        label: "Aliou Mamadou DIA",
        value: "Aliou Mamadou DIA",
      },
      {
        label: "Serigne MBOUP",
        value: "Serigne MBOUP",
      },
      {
        label: "Papa Djibril FALL",
        value: "Papa Djibril FALL",
      },
      {
        label: "Mamadou Lamine DIALLO",
        value: "Mamadou Lamine DIALLO",
      },
      {
        label: "Mahammed Boun Abdallah DIONNE",
        value: "Mahammed Boun Abdallah DIONNE",
      },
      {
        label: "El Hadji Malick GAKOU",
        value: "El Hadji Malick GAKOU",
      },
      {
        label: "Aly Ngouille NDIAYE",
        value: "Aly Ngouille NDIAYE",
      },
      {
        label: "El Hadji Mamadou DIAO",
        value: "El Hadji Mamadou DIAO",
      },
      {
        label: "Thierno Alassane SALL",
        value: "Thierno Alassane SALL",
      },
    ],
    
  },
 
]

type Team = (typeof groups)[number]["teams"][number]

type PopoverTriggerProps = React.ComponentPropsWithoutRef<typeof PopoverTrigger>

interface TeamSwitcherProps extends PopoverTriggerProps {}

export default function TeamSwitcher({ className }: TeamSwitcherProps) {
  const [open, setOpen] = React.useState(false)
  const [showNewTeamDialog, setShowNewTeamDialog] = React.useState(false)
  const [selectedTeam, setSelectedTeam] = React.useState<Team>(
    groups[0].teams[0]
  )

  return (
    <Dialog open={showNewTeamDialog} onOpenChange={setShowNewTeamDialog}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            aria-label="Select a team"
            className={cn("w-[280px] justify-between", className)}
          >
            <Avatar className="mr-2 h-5 w-5">
              <AvatarImage
                src={`https://avatar.vercel.sh/${selectedTeam.value}.png`}
                alt={selectedTeam.label}
                className="grayscale"
              />
              <AvatarFallback>SC</AvatarFallback>
            </Avatar>
            {selectedTeam.label}
            <CaretSortIcon className="ml-auto h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[280px] p-0">
          <Command>
            <CommandList>
              <CommandInput placeholder="Recherche Candidat..." />
              <CommandEmpty>No team found.</CommandEmpty>
              {groups.map((group) => (
                <CommandGroup key={group.label} heading={group.label}>
                  {group.teams.map((team) => (
                    <CommandItem
                      key={team.value}
                      onSelect={() => {
                        setSelectedTeam(team)
                        setOpen(false)
                      }}
                      className="text-sm text-black"
                    >
                      <Avatar className="mr-2 h-5 w-5">
                        <AvatarImage
                          src='/img/BDF.png'
                          alt={team.label}
                          className="grayscale"
                        />
                        <AvatarFallback>SC</AvatarFallback>
                      </Avatar>
                      {team.label}
                      <CheckIcon
                        className={cn(
                          "ml-auto h-4 w-4",
                          selectedTeam.value === team.value
                            ? "opacity-100"
                            : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              ))}
            </CommandList>
            <CommandSeparator />
           
          </Command>
        </PopoverContent>
      </Popover>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create team</DialogTitle>
          <DialogDescription>
            Add a new team to manage products and customers.
          </DialogDescription>
        </DialogHeader>
        <div>
          <div className="space-y-4 py-2 pb-4">
            <div className="space-y-2">
              <Label htmlFor="name">Team name</Label>
              <Input id="name" placeholder="Acme Inc." />
            </div>
            <div className="space-y-2">
              <Label htmlFor="plan">Subscription plan</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a plan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">
                    <span className="font-medium">Free</span> -{" "}
                    <span className="text-muted-foreground">
                      Trial for two weeks
                    </span>
                  </SelectItem>
                  <SelectItem value="pro">
                    <span className="font-medium">Pro</span> -{" "}
                    <span className="text-muted-foreground">
                      $9/month per user
                    </span>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setShowNewTeamDialog(false)}>
            Cancel
          </Button>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}