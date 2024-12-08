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
import { useLayananQuery } from '@/common/query/query-layanan'

interface ISelectLayanan {
    value?: string
    onChange: (value: string) => void
}

const SelectLayanan: React.FC<ISelectLayanan> = ({ onChange, value }) => {
    const [keyword, setKeyword] = useState<string>('')

    const { data: layananData } = useLayananQuery({ keyword, per_page: 30 })
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
                            ? layananData &&
                              layananData?.data.find(
                                  (items) => items.id_layanan == value
                              )?.layanan
                            : 'Pilih Layanan'}
                        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                </FormControl>
            </PopoverTrigger>
            <PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
                <Command>
                    <CommandInput
                        onValueChange={setKeyword}
                        placeholder="Cari layanan..."
                    />
                    <CommandList>
                        <CommandEmpty>Layanan tidak ditemukan.</CommandEmpty>
                        <CommandGroup>
                            {layananData &&
                                layananData?.data.map((items) => (
                                    <CommandItem
                                        value={items.layanan}
                                        key={items.id_layanan}
                                        onSelect={() => {
                                            onChange(
                                                items.id_layanan.toString()
                                            )
                                            setOpen(false)
                                        }}
                                    >
                                        <Check
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                items.id_layanan === value
                                                    ? 'opacity-100'
                                                    : 'opacity-0'
                                            )}
                                        />
                                        {items.layanan}
                                    </CommandItem>
                                ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default SelectLayanan
