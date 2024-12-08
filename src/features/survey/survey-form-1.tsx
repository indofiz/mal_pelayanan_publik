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
import { Square, SquareCheck } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import SelectPekerjaan from '@/components/extentions/select-pekerjaan'
import SelectPendidikan from '@/components/extentions/select-pendidikan'
import { useStepperStore } from '@/store/stepper/stepper-store'
import { getObjectLength } from '@/lib/objectLength'
import SelectLayanan from '@/components/extentions/select-layanan'
import { kelaminDataSurvey, statusKawinData } from '@/common/data/kelamin'
import { toast } from 'sonner'

const formSchema = z.object({
    email: z.string().email(),
    whatsapp: z.string().min(1, {
        message: 'Nama Whatsapp Harus Diisi.',
    }),
    tenantId: z.string().min(1, {
        message: 'Tenant Harus Dipilih.',
    }),
    usia: z.string().min(1, {
        message: 'Usia Harus Diisi.',
    }),
    gender: z.string().min(1, {
        message: 'Jenis Kelamin Harus Diisi.',
    }),
    statusKawin: z.string().min(1, {
        message: 'Status Kawin Harus Diisi.',
    }),
    pendidikan: z.string().min(1, {
        message: 'Pendidikan Harus Diisi.',
    }),
    pekerjaan: z.string().min(1, {
        message: 'Pekerjaan Harus Diisi.',
    }),
    statusMengurus: z.string().min(1, {
        message: 'Jenis Permohonan Harus Diisi.',
    }),
})

const initialValues = {
    email: '',
    whatsapp: '',
    usia: '',
    gender: '',
    statusKawin: '',
    pendidikan: '',
    pekerjaan: '',
    statusMengurus: 'SENDIRI',
    tenantId: '',
}

export default function SurveyForm1() {
    const { nextStep, updateRespondenData, respondenData } = useStepperStore()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            getObjectLength(respondenData) == 0
                ? initialValues
                : {
                      ...initialValues,
                      ...respondenData,
                      usia: respondenData.usia
                          ? respondenData.usia.toString()
                          : '',
                  },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            updateRespondenData(values)
            nextStep()
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
                    name="statusMengurus"
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
                                                field.value == 'SENDIRI'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="SENDIRI" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == 'SENDIRI' ? (
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
                                                field.value == 'DIKUASAKAN'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="DIKUASAKAN" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == 'DIKUASAKAN' ? (
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
                    name="tenantId"
                    render={({ field }) => (
                        <FormItem className="flex flex-col">
                            <FormLabel>Tenant Yang Ingin Disurvey :</FormLabel>
                            <SelectLayanan
                                onChange={field.onChange}
                                value={field.value}
                            />
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
                                    type="tel"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="gender"
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
                                    {kelaminDataSurvey.map((item) => (
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
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Email :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan email"
                                    type="email"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor Whatsapp :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Masukan nomor whatsapp"
                                    type="tel"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="statusKawin"
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
                            <SelectPendidikan
                                onChange={field.onChange}
                                value={field.value}
                            />
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
                            <SelectPekerjaan
                                onChange={field.onChange}
                                value={field.value}
                            />

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-2 flex-col md:flex-row">
                    <Button type="submit" size={'lg'}>
                        Selanjutnya
                    </Button>
                    <Button type="reset" variant={'outline'} size={'lg'}>
                        Reset
                    </Button>
                </div>
            </form>
        </Form>
    )
}
