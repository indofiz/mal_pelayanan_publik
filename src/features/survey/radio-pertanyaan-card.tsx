import { IQuesioner } from '@/common/query/query-event'
import {
    FormControl,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

interface IRadioPertanyaan {
    onChange: (value: string) => void
    value: string
    pertanyaan: IQuesioner
}
export const RadioPertanyaan: React.FC<IRadioPertanyaan> = ({
    onChange,
    value,
    pertanyaan,
}) => {
    const title = pertanyaan.question.split('.')

    return (
        <FormItem className="border border-border_card rounded-xl p-4 text-gray-800">
            <FormLabel className="font-bold text-lg text-black_line">
                Pertanyaan #{title[0] ?? '-'}
            </FormLabel>
            <div className="text-sm mt-2">{title[1] ?? ''}</div>
            <FormControl>
                <RadioGroup
                    onValueChange={onChange}
                    defaultValue={value}
                    className="flex flex-col space-y-1 pt-2"
                >
                    {pertanyaan.quesionerAnswer.map((option) => (
                        <FormItem
                            className="flex items-center space-x-3 space-y-0"
                            key={option.id}
                        >
                            <FormControl>
                                <RadioGroupItem value={option.value} />
                            </FormControl>
                            <FormLabel className="font-normal">
                                {option.sign}
                            </FormLabel>
                        </FormItem>
                    ))}
                </RadioGroup>
            </FormControl>
            <FormMessage />
        </FormItem>
    )
}

// <div className="bg-white border border-border_card rounded-xl p-4">
//     <div className="font-bold text-lg">Pertanyaan #1</div>
//     <div className="text-sm mt-2">
//         Bagaimana penilaian anda mengenai kesesuaian persyaratan
//         pelayanan yang harus dipenuhi jenis pelayanan yang anda
//         ajukan?
//     </div>
//     <div className="mt-4">
//         <RadioGroup
//             defaultValue="option-one"
//             className="flex flex-col gap-5"
//         >
//             <div className="flex items-center space-x-2">
//                 <RadioGroupItem
//                     value="option-one"
//                     id="option-one"
//                 />
//                 <Label htmlFor="option-one">Tidak Sesuai</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <RadioGroupItem
//                     value="option-two"
//                     id="option-two"
//                 />
//                 <Label htmlFor="option-two">Kurang Sesuai</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <RadioGroupItem
//                     value="option-two"
//                     id="option-two"
//                 />
//                 <Label htmlFor="option-two">Sesuai</Label>
//             </div>
//             <div className="flex items-center space-x-2">
//                 <RadioGroupItem
//                     value="option-two"
//                     id="option-two"
//                 />
//                 <Label htmlFor="option-two">Sangat Sesuai</Label>
//             </div>
//         </RadioGroup>
//     </div>
// </div>
