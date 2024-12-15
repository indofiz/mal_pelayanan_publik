import { useQuery } from 'react-query'
import { regulasiUrl } from '../url'

export interface IResponse {
    status: string
    message: string
    data: IRegulasi[]
}

export interface IRegulasi {
    id_regulasi: number
    judul: string
    file_url: string
    aktif: string
    created_at: string
    updated_at: string
    mimes: string
}

export const useRegulasiQuery = () => {
    return useQuery<IResponse>('regulasi', async () => {
        const response = await fetch(regulasiUrl)
        const data: IResponse = await response.json()

        if (!response.ok || data.status !== 'success') {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
