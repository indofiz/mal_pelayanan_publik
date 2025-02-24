import { useQuery } from 'react-query'
import { antrianDetailUrl } from '../url'

export interface IResponse {
    status: string
    message: string
    data: IAntrianData
}

export interface IAntrianData {
    id: string
    kode: string
    jenis_permohonan: string
    nama_lengkap: string
    mobile: string
    usia: number
    jenis_kelamin: string
    pendidikan: string
    status_kawin: string
    pekerjaan: string
    tanggal: string // ISO date string
    jam: string // Time string in HH:mm:ss format
    status: string
    hadir: string
    mengisi_ikm: string
    id_layanan: number
    id_instansi: number
    created_at: string // ISO date-time string
    updated_at: string // ISO date-time string
    wa_daftar_status: string | null
    waktu_wa_daftar_status: string | null
    wa_antrian_status: string
    waktu_wa_antrian_status: string // ISO date string
    wa_selesai: string
    waktu_wa_selesai: string // ISO date string
}

export const useDetailAntrianQuery = ({
    id,
    onSuccess,
}: {
    id: string | number
    onSuccess?: (data: IResponse) => void
}) => {
    return useQuery<IResponse>(
        ['detail-antrian', { id }],
        async () => {
            const response = await fetch(antrianDetailUrl + '/' + id)
            const data: IResponse = await response.json()

            if (!response.ok || data.status !== 'success') {
                throw new Error('Network response was not ok')
            }
            return data
        },
        {
            enabled: !!id,
            refetchOnWindowFocus: false,
            onSuccess,
        }
    )
}
