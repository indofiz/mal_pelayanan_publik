import { useQuery } from 'react-query'
import { layananDetailUrl } from '../url'

export interface IResponse {
    status: string
    message: string
    data: ILayanan
}

export interface ILayanan {
    id_layanan: number
    layanan: string
    deskripsi: string
    id_instansi: number
    created_at: string
    updated_at: string
    nama_instansi: string
}

export const useDetailLayananQuery = ({ id }: { id: string | number }) => {
    return useQuery<IResponse>(
        ['layanan', { id }],
        async () => {
            const response = await fetch(layananDetailUrl + '/' + id)
            const data: IResponse = await response.json()

            if (!response.ok || data.status !== 'success') {
                throw new Error('Network response was not ok')
            }
            return data
        },
        { enabled: !!id }
    )
}
