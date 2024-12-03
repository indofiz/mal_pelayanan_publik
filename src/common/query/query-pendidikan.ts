import { useQuery } from 'react-query'
import { pendidikanUrl } from '../url'

export interface IPendidikan {
    id: number
    pendidikan: string
}
interface TransformedData {
    value: string
    label: string
}
interface IResponsePendidikan {
    status: string
    message: string
    data: IPendidikan[]
}

export const usePendidikanQuery = () => {
    return useQuery<TransformedData[]>(
        'pendidikan',
        async () => {
            const response = await fetch(pendidikanUrl)
            const data: IResponsePendidikan = await response.json()

            if (!response.ok || data.status !== 'success') {
                throw new Error('Network response was not ok')
            }

            return data.data.map((item) => ({
                label: item.pendidikan,
                value: String(item.id),
            }))
        },
        {
            // Disable caching, since data might change
            staleTime: Infinity,
        }
    )
}
