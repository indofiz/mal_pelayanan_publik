import { useQuery } from 'react-query'
import { fasilitasUrl } from '../url'

export interface IResponse {
    status: string
    message: string
    data: IFasilitas[]
    page: Page
}

export interface IFasilitas {
    id_fasilitas: number
    nama_fasilitas: string
    deskripsi: string
    aktif: string
    foto: string
}

export interface Page {
    total: number
    per_page: number
    current_page: number
    total_page: number
}

export const useFasilitasQuery = () => {
    return useQuery<IResponse>('fasilitas', async () => {
        const response = await fetch(fasilitasUrl)
        const data: IResponse = await response.json()

        if (!response.ok || data.status !== 'success') {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
