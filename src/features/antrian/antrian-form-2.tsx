import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from '@/components/ui/form'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { TimePickerDemo } from '@/components/extentions/date-time-picker-popup'
import { Calendar } from '@/components/ui/calendar'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { format, getHours, startOfToday, startOfTomorrow } from 'date-fns'
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card'
import { jsonToFormData } from '@/lib/jsonToFormData'
import { useAntrianmMutation } from '@/common/query/query-antrian'
import { toast } from 'sonner'
import { useNavigate } from 'react-router-dom'
import { id } from 'date-fns/locale'

const formSchema = z.object({
    tanggal: z.date(),
    jam: z.date(),
})

type FormSchemaType = z.infer<typeof formSchema>

export function AntrianForm2() {
    const navigate = useNavigate()
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    })

    const { formData, prevStep, reset } = useStepperAntrianStore()
    const mutationPost = useAntrianmMutation()

    function onSubmit(data: FormSchemaType) {
        const formDatas = jsonToFormData({
            ...formData,
            ...data,
            tanggal: format(data.tanggal, 'yyyy-MM-dd'),
            jam: format(data.jam, 'HH:mm'),
        })

        try {
            if (data && getHours(data.jam) >= 8 && getHours(data.jam) <= 16) {
                mutationPost.mutate(formDatas, {
                    onSuccess: (data) => {
                        toast.success(
                            `Antrian ${data.data.nama_lengkap} berhasil diajukan pada tanggal ${data.data.tanggal} jam ${data.data.jam}`
                        )
                        reset()
                        setTimeout(() => {
                            navigate('/', { replace: true })
                        }, 3000)
                    },
                    onError: (error) => {
                        toast.error(`Error pengajuan: ${error.message}`)
                    },
                })
            } else {
                toast.error('Pilih jam antara 08:00 - 16:00')
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
            toast.error('Failed to submit the form. Please try again.')
        }
    }

    return (
        <Card className="">
            <CardHeader>
                <CardTitle>Tanggal dan Waktu</CardTitle>
                <CardDescription>
                    Pilih tanggal dan waktu anda ingin menggunakan layanan MPP.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form
                        className="space-y-2 max-w-sm mx-auto"
                        onSubmit={form.handleSubmit(onSubmit)}
                    >
                        <FormField
                            control={form.control}
                            name="tanggal"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-left">
                                        Pilih Tanggal :
                                    </FormLabel>
                                    <FormControl>
                                        <div className="flex justify-center">
                                            <Calendar
                                                mode="single"
                                                selected={field.value}
                                                onSelect={field.onChange}
                                                disabled={[
                                                    { dayOfWeek: [0, 6] },
                                                    {
                                                        before:
                                                            getHours(
                                                                new Date()
                                                            ) >= 16
                                                                ? startOfTomorrow()
                                                                : startOfToday(),
                                                    },
                                                ]}
                                                locale={id}
                                                initialFocus
                                            />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="jam"
                            render={({ field }) => (
                                <FormItem className="flex flex-col">
                                    <FormLabel className="text-left mb-2">
                                        Pilih Jam dan Menit :
                                    </FormLabel>
                                    <FormControl>
                                        <div className="p-3 bg-muted rounded-lg">
                                            <TimePickerDemo
                                                setDate={field.onChange}
                                                date={field.value}
                                            />
                                        </div>
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className="flex justify-end gap-2 flex-col md:flex-row pt-4">
                            <Button
                                type="submit"
                                className="md:order-last md:flex-1"
                                size={'lg'}
                                disabled={mutationPost.isLoading}
                            >
                                <Check /> Ajukan Antrian
                            </Button>
                            <Button
                                type="button"
                                variant={'outline'}
                                size={'lg'}
                                className="md:flex-1"
                                onClick={prevStep}
                            >
                                Kembali
                            </Button>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    )
}
