import { useQuery } from 'react-query'
import { instansiDetailUrl } from '../url'
import { IDataLayanan } from './query-layanan'

export interface IInstansiResponse {
    status: string
    message: string
    data: IInstansiDetail
}

export interface IInstansiDetail {
    id_instansi: number
    kode: string
    instansi: string
    no_tenant: number
    jumlah_petugas: number
    logo: string
    aktif: string
    deskripsi: string
    total_antrian: number
    service: IDataLayanan[]
}

export const useInstansiDetailQuery = ({ id }: { id: string | number }) => {
    return useQuery<IInstansiResponse>(['instansi', id], async () => {
        const response = await fetch(instansiDetailUrl + '/' + id)
        const data: IInstansiResponse = await response.json()

        if (!response.ok || !data.status) {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
