import { useQuery } from 'react-query'
import { pekerjaanUrl } from '../url'

export interface IPekerjaan {
    id: number
    pekerjaan: string
}
interface TransformedData {
    value: string
    label: string
}
interface IResponsePekerjaan {
    status: string
    message: string
    data: IPekerjaan[]
}

export const usePekerjaanQuery = () => {
    return useQuery<TransformedData[]>(
        'pekerjaan',
        async () => {
            const response = await fetch(pekerjaanUrl)
            const data: IResponsePekerjaan = await response.json()

            if (!response.ok || data.status !== 'success') {
                throw new Error('Network response was not ok')
            }

            return data.data.map((item) => ({
                label: item.pekerjaan,
                value: String(item.id),
            }))
        },
        {
            // Disable caching, since data might change
            staleTime: Infinity,
        }
    )
}
