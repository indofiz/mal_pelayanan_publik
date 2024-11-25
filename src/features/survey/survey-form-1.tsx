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
import { toast } from '@/hooks/use-toast'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
    usia: z.number(),
    pendidikan: z.string(),
    pekerjaan: z.string(),
    status_kawin: z.string().optional(),
    tenant: z.string(),
    jenis_permohonan: z.string(),
})

export default function SurveyForm1() {
    const languages = [
        {
            label: 'English',
            value: 'en',
        },
        {
            label: 'French',
            value: 'fr',
        },
        {
            label: 'German',
            value: 'de',
        },
        {
            label: 'Spanish',
            value: 'es',
        },
        {
            label: 'Portuguese',
            value: 'pt',
        },
        {
            label: 'Russian',
            value: 'ru',
        },
        {
            label: 'Japanese',
            value: 'ja',
        },
        {
            label: 'Korean',
            value: 'ko',
        },
        {
            label: 'Chinese',
            value: 'zh',
        },
    ] as const
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            usia: 0,
            pendidikan: '',
            pekerjaan: '',
            status_kawin: '',
            tenant: '',
            jenis_permohonan: 'sendiri',
        },
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
            toast(
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        ERROOOOR
                        {JSON.stringify(values, null, 2)}
                    </code>
                </pre>
            )
        }
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4 max-w-3xl mx-auto py-4"
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
                    name="usia"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usia :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan usia anda"
                                    type="number"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="pendidikan"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Pendidikan :</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih Pendidikan" />
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
                                                'w-full justify-between',
                                                !field.value &&
                                                    'text-muted-foreground'
                                            )}
                                        >
                                            {field.value
                                                ? languages.find(
                                                      (language) =>
                                                          language.value ===
                                                          field.value
                                                  )?.label
                                                : 'Select language'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No language found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                'pekerjaan',
                                                                language.value
                                                            )
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                language.value ===
                                                                    field.value
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0'
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
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
                    name="status_kawin"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Status Kawin</FormLabel>
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
                    name="tenant"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Tenant :</FormLabel>
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
                                                ? languages.find(
                                                      (language) =>
                                                          language.value ===
                                                          field.value
                                                  )?.label
                                                : 'Select language'}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </FormControl>
                                </PopoverTrigger>
                                <PopoverContent className="w-[200px] p-0">
                                    <Command>
                                        <CommandInput placeholder="Search language..." />
                                        <CommandList>
                                            <CommandEmpty>
                                                No language found.
                                            </CommandEmpty>
                                            <CommandGroup>
                                                {languages.map((language) => (
                                                    <CommandItem
                                                        value={language.label}
                                                        key={language.value}
                                                        onSelect={() => {
                                                            form.setValue(
                                                                'tenant',
                                                                language.value
                                                            )
                                                        }}
                                                    >
                                                        <Check
                                                            className={cn(
                                                                'mr-2 h-4 w-4',
                                                                language.value ===
                                                                    field.value
                                                                    ? 'opacity-100'
                                                                    : 'opacity-0'
                                                            )}
                                                        />
                                                        {language.label}
                                                    </CommandItem>
                                                ))}
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
