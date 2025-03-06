import { useQuery } from 'react-query'
import { instansiUrl } from '../url'

export interface IInstansiResponse {
    status: string
    message: string
    data: IInstansi[]
}

export interface IInstansi {
    id_instansi: number
    kode: string
    instansi: string
    no_tenant: number
    jumlah_petugas: number
    logo: string
    aktif: string
    deskripsi: string
}

export const useInstansiQuery = () => {
    return useQuery<IInstansiResponse>(
        ['instansi'],
        async () => {
            const response = await fetch(instansiUrl + '?per_page=100')
            const data: IInstansiResponse = await response.json()

            if (!response.ok || !data.status) {
                throw new Error('Network response was not ok')
            }

            return data
        },
        { refetchOnWindowFocus: false }
    )
}
