import { Input } from '@/components/ui/input'
import { useState } from 'react'

type NumberInputProps = {
    value?: string
    onChange?: (value: string) => void
    allowDecimal?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>

const NumberInput: React.FC<NumberInputProps> = ({
    value,
    onChange,
    allowDecimal = false,
    ...props
}) => {
    const [inputValue, setInputValue] = useState<string>(value || '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value

        if (allowDecimal) {
            if (/^\d*\.?\d*$/.test(newValue)) {
                setInputValue(newValue)
                if (onChange) onChange(newValue)
            }
        } else {
            if (/^\d*$/.test(newValue)) {
                setInputValue(newValue)
                if (onChange) onChange(newValue)
            }
        }
    }

    return (
        <Input
            type="text"
            value={inputValue}
            onChange={handleChange}
            {...props}
        />
    )
}

export default NumberInput
