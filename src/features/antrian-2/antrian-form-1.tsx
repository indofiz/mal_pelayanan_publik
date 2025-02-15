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
import { ArrowRight, Square, SquareCheck } from 'lucide-react'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { kelaminData, statusKawinData } from '@/common/data/kelamin'
import { getObjectLength } from '@/lib/objectLength'
import SelectPendidikan from '@/components/extentions/select-pendidikan'
import SelectPekerjaan from '@/components/extentions/select-pekerjaan'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
    nama_lengkap: z.string().min(1, {
        message: 'Nama Lengkap Harus Diisi.',
    }),
    alamat: z.string().min(1, {
        message: 'Alamat Lengkap Harus Diisi.',
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
    mobile: z.string().min(1, {
        message: 'Nomor HP Harus Diisi.',
    }),
    jenis_permohonan: z.string().min(1, {
        message: 'Jenis Permohonan Harus Diisi.',
    }),
})
const initialValues = {
    nama_lengkap: '',
    alamat: '',
    usia: '',
    jenis_kelamin: '',
    status_kawin: '',
    pendidikan: '',
    pekerjaan: '',
    jenis_permohonan: '1',
    mobile: '',
}

export default function Antrian2Form1() {
    const { nextStep, updateFormData, formData } = useStepperAntrianStore()
    // console.log({ ...initialValues, ...formData })

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues:
            getObjectLength(formData) == 0
                ? initialValues
                : { ...initialValues, ...formData },
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        try {
            console.log(values)
            updateFormData(values)
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
                                                field.value == '1'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="1" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == '1' ? (
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
                                                field.value == '2'
                                                    ? 'bg-green_primary text-white border-emerald-700'
                                                    : ''
                                            )}
                                        >
                                            <FormControl className="hidden">
                                                <RadioGroupItem value="2" />
                                            </FormControl>
                                            <FormLabel className="font-normal flex items-center gap-2 after:content-[''] after:inset-0 after:absolute">
                                                {field.value == '2' ? (
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
                    name="mobile"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Nomor HP :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="08xxxxxxxxxx"
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
                    name="usia"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Usia :</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Contoh : 20"
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
                <FormField
                    control={form.control}
                    name="alamat"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Alamat :</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Masukan alamat lengkap"
                                    {...field}
                                />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="flex justify-end gap-2 flex-col md:flex-row">
                    <Button
                        type="submit"
                        className="md:order-last md:flex-1"
                        size={'lg'}
                    >
                        Selanjutnya <ArrowRight />
                    </Button>
                    <Button
                        type="reset"
                        variant={'outline'}
                        className="md:flex-1"
                        size={'lg'}
                    >
                        Reset
                    </Button>
                </div>
            </form>
        </Form>
    )
}
