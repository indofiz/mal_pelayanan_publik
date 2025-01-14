import { useQuery } from 'react-query'
import {
    kunjunganBulananURL,
    kunjunganHarianURL,
    kunjunganMingguanURL,
} from '../url'

export interface IResponseKunjungan {
    status: string
    data: IReportKunjungan
}

export interface IReportKunjungan {
    series: number[]
    dateLabels: string[]
}

interface IParamKunjungan {
    type: string
}

const typeKunjungan = ['harian', 'mingguan', 'bulanan']
const urlKunjungan = [
    kunjunganHarianURL,
    kunjunganMingguanURL,
    kunjunganBulananURL,
]

export const useKunjunganQuery = ({ type = 'harian' }: IParamKunjungan) => {
    return useQuery<IResponseKunjungan>(
        ['kunjungan', type],
        async () => {
            const indexType = typeKunjungan.indexOf(type)
            const url =
                indexType !== -1 ? urlKunjungan[indexType] : kunjunganHarianURL
            const response = await fetch(url)
            const data: IResponseKunjungan = await response.json()

            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return data
        },
        {
            refetchOnWindowFocus: false,
        }
    )
}
