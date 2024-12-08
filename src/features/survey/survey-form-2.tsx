import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, FormField } from '@/components/ui/form'
import { RadioPertanyaan } from './radio-pertanyaan-card'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'
import { useEventQuery } from '@/common/query/query-event'
import {
    createDynamicSchemaQuisioner,
    createDynamicSchemaValue,
} from '@/utils/dynamic-schema'
import { ArrowLeft, Save } from 'lucide-react'
import { useStepperStore } from '@/store/stepper/stepper-store'
import { getObjectLength } from '@/lib/objectLength'

export const SurveyForm2 = () => {
    const { data: dataQuisioner, isLoading } = useEventQuery()
    const { nextStep, prevStep, updatePertanyaanData, pertanyaanData } =
        useStepperStore()

    const dynamicSchema = createDynamicSchemaQuisioner({
        data: dataQuisioner?.data?.quesioners,
        type: 'CHOICE',
    })

    const dynamicValue = createDynamicSchemaValue({
        data: dataQuisioner?.data?.quesioners,
        type: 'CHOICE',
    })

    const form = useForm<z.infer<typeof dynamicSchema>>({
        resolver: zodResolver(dynamicSchema),
        defaultValues:
            getObjectLength(pertanyaanData) > 0 ? pertanyaanData : dynamicValue,
    })

    function onSubmit(datas: z.infer<typeof dynamicSchema>) {
        updatePertanyaanData(datas)
        nextStep()
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(datas, null, 2)}
                    </code>
                </pre>
            ),
        })
    }

    if (isLoading) return <div>Loading...</div>

    return (
        <div className="flex flex-col gap-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {dataQuisioner?.data?.quesioners?.map((quisioner) =>
                        quisioner.quesionerType === 'CHOICE' ? (
                            <FormField
                                key={quisioner.id}
                                control={form.control}
                                name={quisioner.id}
                                render={({ field }) => (
                                    <RadioPertanyaan
                                        onChange={field.onChange}
                                        value={field.value}
                                        pertanyaan={quisioner}
                                    />
                                )}
                            />
                        ) : null
                    )}
                    <div className="flex justify-end gap-2 mt-12">
                        <Button
                            type="button"
                            onClick={prevStep}
                            variant="outline"
                            size={'lg'}
                        >
                            <ArrowLeft /> Kembali
                        </Button>
                        <Button type="submit" size={'lg'}>
                            <Save /> Selanjutnya
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
