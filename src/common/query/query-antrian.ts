import { useMutation } from 'react-query'
import { antrianUrl } from '../url'

export interface ApiResponse {
    status: string
    message: string
    data: Data
}

export interface Data {
    id_layanan: string
    tanggal: string
    jam: string
    nama_lengkap: string
    jenis_kelamin: string
    status_kawin: string
    pendidikan: string
    pekerjaan: string
    usia: string
    updated_at: string
    created_at: string
    id: number
}

const postDataAntrian = async (formData: FormData): Promise<ApiResponse> => {
    const response = await fetch(antrianUrl, {
        method: 'POST',
        body: formData,
    })

    if (!response.ok) {
        throw new Error('Failed to post data')
    }

    return response.json()
}

export const useAntrianmMutation = () => {
    return useMutation<ApiResponse, Error, FormData>(postDataAntrian)
}
