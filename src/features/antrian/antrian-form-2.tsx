import { Calendar as CalendarIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover'
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
import { toast } from '@/hooks/use-toast'
import { useStepperAntrianStore } from '@/store/stepper/stepper-antrian-store'
import { format, startOfToday } from 'date-fns'

const formSchema = z.object({
    tanggal: z.date(),
    waktu: z.date(),
})

type FormSchemaType = z.infer<typeof formSchema>

export function AntrianForm2() {
    const form = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    })

    const { formData } = useStepperAntrianStore()

    function onSubmit(data: FormSchemaType) {
        console.log({
            ...formData,
            ...data,
            tanggal: format(data.tanggal, 'yyyy-MM-dd'),
            waktu: format(data.waktu, 'HH:mm'),
        })
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre>
                    <code>{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        })
    }

    return (
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
                                        disabled={(date) =>
                                            date < startOfToday() ||
                                            date >= new Date('3000-01-01')
                                        }
                                        initialFocus
                                    />
                                </div>
                            </FormControl>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="waktu"
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
                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
