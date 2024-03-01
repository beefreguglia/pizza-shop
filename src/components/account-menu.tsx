import { Building, LogOut } from 'lucide-react'

import { Button } from './ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu'

export function AccountMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex select-none select-none items-center gap-2"
        >
          Pizza Shop
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenu>
          <DropdownMenuLabel className="flex flex-col">
            <span>Bernardo Freguglia</span>
            <span className="text-xs font-normal text-muted-foreground">
              b.freguglia@gmail.com
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Building className="mr-2 h-4 w-4" />
            <span>Perfil da loja</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
            <LogOut className="mr-2 h-4 w-4" />
            <span>Sair</span>
          </DropdownMenuItem>
        </DropdownMenu>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
