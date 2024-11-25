import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

export const SurveyForm2 = () => {
    return (
        <div className="flex flex-col gap-4">
            <div className="bg-white border border-border_card rounded-xl p-4">
                <div className="font-bold text-lg">Pertanyaan #1</div>
                <div className="text-sm mt-2">
                    Bagaimana penilaian anda mengenai kesesuaian persyaratan
                    pelayanan yang harus dipenuhi jenis pelayanan yang anda
                    ajukan?
                </div>
                <div className="mt-4">
                    <RadioGroup
                        defaultValue="option-one"
                        className="flex flex-col gap-5"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Tidak Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Kurang Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sangat Sesuai</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="bg-white border border-border_card rounded-xl p-4">
                <div className="font-bold text-lg">Pertanyaan #1</div>
                <div className="text-sm mt-2">
                    Bagaimana penilaian anda mengenai kesesuaian persyaratan
                    pelayanan yang harus dipenuhi jenis pelayanan yang anda
                    ajukan?
                </div>
                <div className="mt-4">
                    <RadioGroup
                        defaultValue="option-one"
                        className="flex flex-col gap-5"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Tidak Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Kurang Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sangat Sesuai</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
            <div className="bg-white border border-border_card rounded-xl p-4">
                <div className="font-bold text-lg">Pertanyaan #1</div>
                <div className="text-sm mt-2">
                    Bagaimana penilaian anda mengenai kesesuaian persyaratan
                    pelayanan yang harus dipenuhi jenis pelayanan yang anda
                    ajukan?
                </div>
                <div className="mt-4">
                    <RadioGroup
                        defaultValue="option-one"
                        className="flex flex-col gap-5"
                    >
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-one"
                                id="option-one"
                            />
                            <Label htmlFor="option-one">Tidak Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Kurang Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sesuai</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem
                                value="option-two"
                                id="option-two"
                            />
                            <Label htmlFor="option-two">Sangat Sesuai</Label>
                        </div>
                    </RadioGroup>
                </div>
            </div>
        </div>
    )
}
