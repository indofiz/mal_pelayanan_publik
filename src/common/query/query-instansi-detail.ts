import { useQuery } from 'react-query'
import { instansiUrl } from '../url'
import { IDataLayanan } from './query-layanan'

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
    layanan: IDataLayanan[]
}

export const useInstansiQuery = ({ id }: { id: string }) => {
    return useQuery<IInstansiResponse>(['instansi', id], async () => {
        const response = await fetch(instansiUrl + '?per_page=100')
        const data: IInstansiResponse = await response.json()

        if (!response.ok || !data.status) {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
