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
}
export const RadioPertanyaan: React.FC<IRadioPertanyaan> = ({
    onChange,
    value,
}) => {
    return (
        <FormItem className="border border-border_card rounded-xl p-4 text-gray-800">
            <FormLabel className="font-bold text-lg text-black_line">
                Notify me about...
            </FormLabel>
            <div className="text-sm mt-2">
                Bagaimana penilaian anda mengenai kesesuaian persyaratan
                pelayanan yang harus dipenuhi jenis pelayanan yang anda ajukan?
            </div>
            <FormControl>
                <RadioGroup
                    onValueChange={onChange}
                    defaultValue={value}
                    className="flex flex-col space-y-1 pt-2"
                >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <RadioGroupItem value="all" />
                        </FormControl>
                        <FormLabel className="font-normal">
                            All new messages
                        </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <RadioGroupItem value="mentions" />
                        </FormControl>
                        <FormLabel className="font-normal">
                            Direct messages and mentions
                        </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                            <RadioGroupItem value="none" />
                        </FormControl>
                        <FormLabel className="font-normal">Nothing</FormLabel>
                    </FormItem>
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
