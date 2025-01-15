import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'

import { Button } from '@/components/ui/button'
import { useEventQuery } from '@/common/query/query-event'
import {
    createDynamicSchemaQuisioner,
    createDynamicSchemaValue,
} from '@/utils/dynamic-schema'
import { ArrowLeft, Loader, Save } from 'lucide-react'
import { useStepperStore } from '@/store/stepper/stepper-store'
import { Textarea } from '@/components/ui/textarea'
import { useRespondenMutation } from '@/common/query/query-responden'
import { toast } from 'sonner'
import { useSurveyMutation } from '@/common/query/query-survey'
import { useNavigate } from 'react-router-dom'
import { getObjectLength } from '@/lib/objectLength'

export const SurveyForm3 = () => {
    const {
        data: dataQuisioner,
        isLoading,
        isRefetching,
        isFetching,
    } = useEventQuery()
    const {
        prevStep,
        updatePertanyaanData,
        pertanyaanData,
        respondenData,
        reset,
    } = useStepperStore()
    const respondenMutation = useRespondenMutation()
    const surveyMutation = useSurveyMutation()
    const navigate = useNavigate()

    const dynamicSchema = createDynamicSchemaQuisioner({
        data: dataQuisioner?.data?.quesioners,
        type: 'ESSAY',
        isRequired: false,
    })

    const dynamicValue = createDynamicSchemaValue({
        data: dataQuisioner?.data?.quesioners,
        type: 'ESSAY',
    })

    const form = useForm<z.infer<typeof dynamicSchema>>({
        resolver: zodResolver(dynamicSchema),
        defaultValues:
            getObjectLength(pertanyaanData) > 0 ? pertanyaanData : dynamicValue,
    })

    function onSubmit(datas: z.infer<typeof dynamicSchema>) {
        updatePertanyaanData(datas)
        const result = Object.entries({ ...pertanyaanData, ...datas }).map(
            ([key, value]) => ({
                questionerId: key,
                answer: value,
            })
        )
        const usia: number = respondenData.usia ? +respondenData.usia : 0

        try {
            respondenMutation.mutate(
                { ...respondenData, usia: usia },
                {
                    onSuccess: (data) => {
                        surveyMutation.mutate(
                            { answerList: result, respondenId: data.data },
                            {
                                onSuccess: () => {
                                    toast.success(
                                        `Terima Kasih, Survey berhasil diajukan`
                                    )
                                    reset()
                                    setTimeout(() => {
                                        navigate('/', { replace: true })
                                    }, 3000)
                                },
                                onError: (error) => {
                                    toast.error(
                                        `Error survey: ${error.message}`
                                    )
                                },
                            }
                        )
                    },
                    onError: (error) => {
                        toast.error(`Error pengajuan: ${error.message}`)
                    },
                }
            )
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            toast.error(` `)
        }
    }

    if (isLoading || isFetching || isRefetching)
        return (
            <div className="relative h-64">
                <div className="inset-0 flex justify-center gap-2 items-center absolute">
                    <Loader className=" animate-spin" />
                    Loading...
                </div>
            </div>
        )

    return (
        <div className="flex flex-col gap-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    {dataQuisioner?.data?.quesioners?.map((quisioner) =>
                        quisioner.quesionerType === 'ESSAY' ? (
                            <FormField
                                key={quisioner.id}
                                control={form.control}
                                name={quisioner.id}
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>
                                            {quisioner.question}
                                        </FormLabel>
                                        <FormControl>
                                            <Textarea
                                                placeholder="Masukan kritik dan saran anda."
                                                rows={7}
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>
                                            Kritik dan saran tidak wajib diisi.
                                        </FormDescription>
                                        <FormMessage />
                                    </FormItem>
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
                        <Button
                            type="submit"
                            size={'lg'}
                            disabled={
                                respondenMutation.isLoading ||
                                surveyMutation.isLoading
                            }
                        >
                            {respondenMutation.isLoading ||
                            surveyMutation.isLoading ? (
                                'Sedang Submit...'
                            ) : (
                                <>
                                    <Save /> Submit Survey
                                </>
                            )}
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}
