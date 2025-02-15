import { IQuesioner } from '@/common/query/query-event'
import { z } from 'zod'

export const createDynamicSchemaQuisioner = ({
    data,
    type,
    isRequired = true,
}: {
    data: IQuesioner[] | undefined
    type: string
    isRequired?: boolean
}) => {
    const schemaObject: Record<string, z.ZodString> = {}
    if (data)
        data.forEach((item) => {
            if (item.quesionerType === type) {
                schemaObject[item.id] = isRequired
                    ? z
                          .string()
                          .min(1, { message: 'Pertanyaan Ini Wajib Diisi.' })
                    : z.string().min(0) // Setiap ID jadi key dengan nilai string
            }
        })
    return z.object(schemaObject)
}
export const createDynamicSchemaValue = ({
    data,
    type,
}: {
    data: IQuesioner[] | undefined
    type: string
}) => {
    const valueObject: object = {}
    if (data)
        data.forEach((item) => {
            if (item.quesionerType === type) {
                Object.assign(valueObject, {
                    [item.id]: '',
                })
            }
        })
    return valueObject
}
