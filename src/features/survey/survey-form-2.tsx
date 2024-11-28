import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Form, FormField } from '@/components/ui/form'
import { RadioPertanyaan } from './radio-pertanyaan-card'
import { toast } from '@/hooks/use-toast'
import { Button } from '@/components/ui/button'

const FormSchema = z.object({
    type: z.enum(['all', 'mentions', 'none'], {
        required_error: 'Pertanyaan Ini Wajib Diisi.',
    }),
    type2: z.enum(['all', 'mentions', 'none'], {
        required_error: 'Pertanyaan Ini Wajib Diisi.',
    }),
})

export const SurveyForm2 = () => {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
    })

    function onSubmit(data: z.infer<typeof FormSchema>) {
        toast({
            title: 'You submitted the following values:',
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">
                        {JSON.stringify(data, null, 2)}
                    </code>
                </pre>
            ),
        })
    }
    return (
        <div className="flex flex-col gap-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <RadioPertanyaan
                                onChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="type2"
                        render={({ field }) => (
                            <RadioPertanyaan
                                onChange={field.onChange}
                                value={field.value}
                            />
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    )
}
