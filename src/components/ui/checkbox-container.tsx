import { Checkbox } from './checkbox'

interface CheckboxContainerProps {
    id: string
    disabled?: boolean
    label: string
    checked: boolean
    onChange: (value: boolean) => void
}

export const CheckboxContainer: React.FC<CheckboxContainerProps> = ({
    checked,
    onChange,
    label,
    disabled = false,
    id,
}) => {
    return (
        <div>
            <Checkbox
                id={id}
                disabled={disabled}
                defaultChecked={checked}
                onCheckedChange={onChange}
            />
            <label
                htmlFor={id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
                {label}
            </label>
        </div>
    )
}
