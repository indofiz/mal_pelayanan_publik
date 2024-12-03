import { toast } from 'sonner'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select'
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from '@/components/ui/command'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
import { Check, ChevronsUpDown } from 'lucide-react'
import { usePendidikanQuery } from '@/common/query/query-pendidikan'
import { usePekerjaanQuery } from '@/common/query/query-pekerjaan'

const formSchema = z.object({
    nama_lengkap: z.string(),
    usia: z.string(),
    jenis_kelamin: z.string(),
    status_kawin: z.string(),
    pendidikan: z.string(),
    pekerjaan: z.string(),
})

export default function AntrianForm1() {
    const { data: pendidikanData } = usePendidikanQuery()
    const { data: pekerjaanData } = usePekerjaanQuery()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values)
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            )
        } catch (error) {
            console.error('Form submission error', error)
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 max-w-3xl mx-auto py-0"
            >
                <FormField
                    control={form.control}
                    name="nama_lengkap"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama lengkap :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan nama lengkap"
                                    type=""
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="usia"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usia :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan usia"
                                    type=""
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="jenis_kelamin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Jenis Kelamin :</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Jenis Kelamin" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">
                                        m@example.com
                                    </SelectItem>
                                    <SelectItem value="m@google.com">
                                        m@google.com
                                    </SelectItem>
                                    <SelectItem value="m@support.com">
                                        m@support.com
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="status_kawin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status Kawin :</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="m@example.com">
                                        m@example.com
                                    </SelectItem>
                                    <SelectItem value="m@google.com">
                                        m@google.com
                                    </SelectItem>
                                    <SelectItem value="m@support.com">
                                        m@support.com
                                    </SelectItem>
                                </SelectContent>
                            </Select>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pendidikan"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Pendidikan :</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                'w-full justify-between',
                                                !field.value &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            {field.value
                                                ? pendidikanData &&
                                                  pendidikanData.find(
                                                      (items) =>
                                                          items.value ===
                                                          field.value
                                                  )?.label
                                                : 'Pilih Pendidikan'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
                                    <Command>
                                        <CommandInput placeholder="Cari pendidikan..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                Pendidikan tidak ditemukan.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {pendidikanData &&
                                                    pendidikanData.map(
                                                        (items) => (
                                                            <CommandItem
                                                                value={
                                                                    items.label
                                                                }
                                                                key={
                                                                    items.value
                                                                }
                                                                onSelect={() => {
                                                                    form.setValue(
                                                                        'pendidikan',
                                                                        items.value
                                                                    )
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        'mr-2 h-4 w-4',
                                                                        items.value ===
                                                                            field.value
                                                                            ? 'opacity-100'
                                                                            : 'opacity-0'
                                                                    )}
                                                                />
                                                                {items.label}
                                                            </CommandItem>
                                                        )
                                                    )}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="pekerjaan"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Pekerjaan :</FormLabel>
                            <Popover>
                                <PopoverTrigger asChild>
                                    <FormControl>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            className={cn(
                                                'justify-between',
                                                !field.value &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            {field.value
                                                ? pekerjaanData &&
                                                  pekerjaanData.find(
                                                      (items) =>
                                                          items.value ===
                                                          field.value
                                                  )?.label
                                                : 'Pilih Pekerjaan'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="p-0 w-[--radix-popover-trigger-width] max-h-[--radix-popover-content-available-height]">
                                    <Command>
                                        <CommandInput placeholder="Cari Pekerjaan..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                Pekerjaan tidak ditemukan.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {pekerjaanData &&
                                                    pekerjaanData.map(
                                                        (items) => (
                                                            <CommandItem
                                                                value={
                                                                    items.label
                                                                }
                                                                key={
                                                                    items.value
                                                                }
                                                                onSelect={() => {
                                                                    form.setValue(
                                                                        'pekerjaan',
                                                                        items.value
                                                                    )
                                                                }}
                                                            >
                                                                <Check
                                                                    className={cn(
                                                                        'mr-2 h-4 w-4',
                                                                        items.value ===
                                                                            field.value
                                                                            ? 'opacity-100'
                                                                            : 'opacity-0'
                                                                    )}
                                                                />
                                                                {items.label}
                                                            </CommandItem>
                                                        )
                                                    )}
                                            </CommandGroup>
                                        </CommandList>
                                    </Command>
                                </PopoverContent>
                            </Popover>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
