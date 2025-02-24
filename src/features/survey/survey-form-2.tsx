import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, FormField } from '@/components/ui/form'
import { RadioPertanyaan } from './radio-pertanyaan-card'
import { Button } from '@/components/ui/button'
import { useEventQuery } from '@/common/query/query-event'
import {
    createDynamicSchemaQuisioner,
    createDynamicSchemaValue,
} from '@/utils/dynamic-schema'
import { ArrowRight } from 'lucide-react'
import { useStepperStore } from '@/store/stepper/stepper-store'
import { getObjectLength } from '@/lib/objectLength'
import ErrorNotif from '@/components/extentions/error-notif'
import LoadingPertanyaan from '@/components/loading/loading-pertanyaan'

export const SurveyForm2 = () => {
    const {
        data: dataQuisioner,
        isLoading,
        isRefetching,
        isFetching,
        isError,
    } = useEventQuery()
    const { nextStep, prevStep, updatePertanyaanData, pertanyaanData } =
        useStepperStore()

    const dynamicSchema = createDynamicSchemaQuisioner({
        data: dataQuisioner?.data?.quesioners,
        type: 'SCALE',
    })

    const dynamicValue = createDynamicSchemaValue({
        data: dataQuisioner?.data?.quesioners,
        type: 'SCALE',
    })

    const form = useForm<z.infer<typeof dynamicSchema>>({
        resolver: zodResolver(dynamicSchema),
        defaultValues:
            getObjectLength(pertanyaanData) > 0 ? pertanyaanData : dynamicValue,
    })

    function onSubmit(datas: z.infer<typeof dynamicSchema>) {
        updatePertanyaanData(datas)
        nextStep()
    }

    if (isLoading || isFetching || isRefetching)
        return (
            <div className="space-y-6">
                <LoadingPertanyaan />
                <LoadingPertanyaan />
                <LoadingPertanyaan />
                <LoadingPertanyaan />
                <LoadingPertanyaan />
            </div>
        )

    if (isError || dataQuisioner?.data?.quesioners?.length == 0)
        return (
            <ErrorNotif
                message="Terjadi Kesalahan"
                sub_message="Silahkan coba lagi, atau refresh halaman."
            />
        )
    return (
        <div className="flex flex-col gap-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {dataQuisioner?.data?.quesioners?.map((quisioner) =>
                        quisioner.quesionerType === 'SCALE' ? (
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

                    <div className="flex justify-end gap-2 flex-col md:flex-row">
                        <Button
                            type="submit"
                            className="md:order-last md:flex-1"
                            size={'lg'}
                        >
                            Selanjutnya <ArrowRight />
                        </Button>
                        <Button
                            onClick={prevStep}
                            type="button"
                            variant={'outline'}
                            className="md:flex-1"
                            size={'lg'}
                        >
                            Kembali
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
