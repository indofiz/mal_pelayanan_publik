import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/utils/utils'
import { ChevronsUpDown, Check } from 'lucide-react'
import { FormControl } from '../ui/form'
import { Button } from '../ui/button'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '../ui/command'
import { useState } from 'react'
import { usePekerjaanQuery } from '@/common/query/query-pekerjaan'

interface ISelectPekerjaan {
    value?: string
    onChange: (value: string) => void
}

const SelectPekerjaan: React.FC<ISelectPekerjaan> = ({ onChange, value }) => {
    const { data: pekerjaanData } = usePekerjaanQuery()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <FormControl>
                    <Button
                        onClick={() => setOpen(!open)}
                        variant="outline"
                        role="combobox"
                        className={cn(
                            'w-full justify-between',
                            !value && 'text-muted-foreground'
                        )}
                    >
                        {value
                            ? pekerjaanData &&
                              pekerjaanData.find(
                                  (items) => items.value === value
                              )?.label
                            : 'Pilih Pekerjaan'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
                <Command>
                    <CommandInput placeholder="Cari pekerjaan..." />
                    <CommandList>
                        <CommandEmpty>Pekerjaan tidak ditemukan.</CommandEmpty>
                        <CommandGroup>
                            {pekerjaanData &&
                                pekerjaanData.map((items) => (
                                    <CommandItem
                                        value={items.label}
                                        key={items.value}
                                        onSelect={() => {
                                            onChange(items.value)
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                items.value === value
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                        {items.label}
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default SelectPekerjaan
