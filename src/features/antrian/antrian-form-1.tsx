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
import { Check, ChevronsUpDown, Square, SquareCheck } from 'lucide-react'
import { usePendidikanQuery } from '@/common/query/query-pendidikan'
import { usePekerjaanQuery } from '@/common/query/query-pekerjaan'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { kelaminData, statusKawinData } from '@/common/data/kelamin'
import { getObjectLength } from '@/lib/objectLength'

const formSchema = z.object({
    nama_lengkap: z.string().min(1, {
        message: 'Nama Lengkap Harus Diisi.',
    }),
    usia: z.string().min(1, {
        message: 'Usia Harus Diisi.',
    }),
    jenis_kelamin: z.string().min(1, {
        message: 'Jenis Kelamin Harus Diisi.',
    }),
    status_kawin: z.string().min(1, {
        message: 'Status Kawin Harus Diisi.',
    }),
    pendidikan: z.string().min(1, {
        message: 'Pendidikan Harus Diisi.',
    }),
    pekerjaan: z.string().min(1, {
        message: 'Pekerjaan Harus Diisi.',
    }),
    jenis_permohonan: z.string().min(1, {
        message: 'Jenis Permohonan Harus Diisi.',
    }),
})

export default function AntrianForm1() {
    const { data: pendidikanData } = usePendidikanQuery()
    const { data: pekerjaanData } = usePekerjaanQuery()
    const { nextStep, updateFormData, formData } = useStepperAntrianStore()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            getObjectLength(formData) > 0
                ? { ...formData }
                : {
                      nama_lengkap: '',
                      usia: '',
                      jenis_kelamin: '',
                      status_kawin: '',
                      pendidikan: '',
                      pekerjaan: '',
                      jenis_permohonan: '',
                  },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values)
            updateFormData(values)
            nextStep()
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
                    name="jenis_permohonan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Permohonan :</FormLabel>
                            <FormControl>
                                <RadioGroup
                                    onValueChange={field.onChange}
                                    defaultValue={field.value}
                                    className="flex gap-2"
                                >
                                    <FormItem className="flex">
                                        <div
                                            className={cn(
                                                'items-center border border-border bg-white rounded-md justify-center px-2 py-3 gap-4 relative',
                                                field.value == 'sendiri'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="sendiri" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == 'sendiri' ? (
                                                    <SquareCheck size={14} />
                                                ) : (
                                                    <Square size={14} />
                                                )}
                                                Mengurus Sendiri
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                    <FormItem className="flex">
                                        <div
                                            className={cn(
                                                'items-center border border-border bg-white rounded-md justify-center px-2 py-3 gap-4 relative',
                                                field.value == 'dikuasakan'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="dikuasakan" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == 'dikuasakan' ? (
                                                    <SquareCheck size={14} />
                                                ) : (
                                                    <Square size={14} />
                                                )}
                                                Dikuasakan
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                </RadioGroup>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="nama_lengkap"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nama lengkap :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan nama lengkap"
                                    type="text"
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
                                    {kelaminData.map((item) => (
                                        <SelectItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
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
                                        <SelectValue placeholder="Pilih Status Perkawinan" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    {statusKawinData.map((item) => (
                                        <SelectItem
                                            key={item.value}
                                            value={item.value}
                                        >
                                            {item.label}
                                        </SelectItem>
                                    ))}
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

                <div className="flex justify-end gap-2">
                    <Button type="reset" variant={'outline'} size={'lg'}>
                        Reset
                    </Button>
                    <Button type="submit" size={'lg'}>
                        Selanjutnya
                    </Button>
                </div>
            </form>
        </Form>
    )
}
