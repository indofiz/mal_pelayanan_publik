import { Button } from '@/components/ui/button'
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { usePencarianModalStore } from '@/store/modal/modal-pencarian'

//FORM
import { zodResolver } from '@hookform/resolvers/zod'
import { Search } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
    keyword: z.string().min(1, {
        message: 'Keyword tidak boleh kosong',
    }),
})
const SearchModalContent = () => {
    const { setKeyword, keyword } = usePencarianModalStore()
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            keyword: keyword ? keyword : '',
        },
    })
    function onSubmit(values: z.infer<typeof formSchema>) {
        setKeyword(values.keyword)
    }
    return (
        <div className="p-4 pt-0 md:pt-4">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex gap-2"
                >
                    <FormField
                        control={form.control}
                        name="keyword"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormControl>
                                    <Input
                                        className="h-14 w-full px-6"
                                        placeholder="Masukan nama layanan"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="size-14" size={'icon'}>
                        <Search />
                    </Button>
                </form>
            </Form>
        </div>
    )
}

export default SearchModalContent
