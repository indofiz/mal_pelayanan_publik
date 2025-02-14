import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { cn } from '@/utils/utils'
import { ChevronsUpDown, Check, Loader } from 'lucide-react'
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
import { useDetailLayananQuery } from '@/common/query/query-layanan-detail'

interface ISelectLayanan {
    value?: string
    onChange: (value: string) => void
    onChangeTenantId?: (value: string) => void
}

const SelectLayanan: React.FC<ISelectLayanan> = ({
    onChange,
    onChangeTenantId,
    value,
}) => {
    const [keyword, setKeyword] = useState<string>('')

    const { data: layananData } = useLayananQuery({ keyword, per_page: 30 })
    const [open, setOpen] = useState<boolean>(false)

    const { data: layananDetailData, isLoading } = useDetailLayananQuery({
        id: value || '',
    })

    return (
        <div className="flex flex-col gap-3">
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
                            autoFocus={false}
                        />
                        <CommandList>
                            <CommandEmpty>
                                Layanan tidak ditemukan.
                            </CommandEmpty>
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
                                                if (onChangeTenantId)
                                                    onChangeTenantId(
                                                        items.id_instansi.toString()
                                                    )
                                                setOpen(false)
                                            }}
                                        >
                                            <Check
                                                className={cn(
                                                    'mr-2 h-4 w-4',
                                                    items.id_layanan == value
                                                        ? 'opacity-100'
                                                        : 'opacity-0'
                                                )}
                                            />
                                            <span>
                                                {items.layanan} -{' '}
                                                <span className="text-[10px] font-light text-gray-500">
                                                    {items.nama_instansi}
                                                </span>
                                            </span>
                                        </CommandItem>
                                    ))}
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </PopoverContent>
            </Popover>
            {value && isLoading && (
                <div className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin" />
                    Loading...
                </div>
            )}
            {layananDetailData ? (
                <div className="flex flex-row gap-3 rounded-lg p-3 border border-green_primary bg-green_primary/20 items-center">
                    <div className="size-8">
                        <img src="/goverment.png" className="w-full" alt="" />
                    </div>
                    <div className="flex-1 text-emerald-700">
                        <div className="font-semibold">
                            Layanan {layananDetailData?.data?.layanan}
                        </div>
                        <div>
                            Instansi :{' '}
                            <span className="capitalize text-xs font-semibold">
                                {layananDetailData?.data?.nama_instansi}
                            </span>
                        </div>
                    </div>
                </div>
            ) : null}
        </div>
    )
}

export default SelectLayanan
