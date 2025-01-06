import { useQuery } from 'react-query'
import { reportSKMUrl } from '../url'

export interface IResponse {
    status: string
    message: string
    data: IReportSKM[]
}

export interface IReportSKM {
    category: string
    total_answers: number
    average_answer: number
}

export const useReportSKMQuery = () => {
    return useQuery<IResponse>(
        ['report_skm'],
        async () => {
            const response = await fetch(reportSKMUrl)
            const data: IResponse = await response.json()

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
