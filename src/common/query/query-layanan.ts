import { useQuery } from 'react-query'
import { layananUrl } from '../url'
import { objectToParam } from '@/lib/objectToParam'

interface ISearchType {
    status: string
    message: string
    data: IDataLayanan[]
    page: Page
}

interface Page {
    total: number
    per_page: number
    current_page: number
    total_page: number
}

export interface IDataLayanan {
    id_layanan: string
    layanan: string
    deskripsi?: string
    id_instansi: string
    created_at?: string
    updated_at?: string
    nama_instansi?: string
}
export const useLayananQuery = ({
    keyword,
    id_instansi,
    per_page = 5,
}: {
    keyword?: string
    per_page?: number
    id_instansi?: string
}) => {
    return useQuery<ISearchType>(['pencarian-layanan', keyword], async () => {
        const objToParam = objectToParam({
            id_instansi,
            keyword,
        })
        const url = `${layananUrl}?${objToParam}&per_page=${per_page}`

        const response = await fetch(url)
        const data: ISearchType = await response.json()

        if (!response.ok || !data.status) {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
