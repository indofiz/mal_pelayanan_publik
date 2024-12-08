import { useMutation } from 'react-query'
import { surveyRespondenUrl } from '../url'

export interface ApiResponse {
    status: boolean
    message: string
    data: string
}

export interface DataResponden {
    email?: string
    gender?: string
    pekerjaan?: string
    pendidikan?: string
    statusKawin?: string
    statusMengurus?: string
    tenantId?: string
    usia?: string | number
    whatsapp?: string
}

const postDataResponden = async (data: DataResponden): Promise<ApiResponse> => {
    const response = await fetch(surveyRespondenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })

    if (!response.ok) {
        throw new Error('Failed to post data')
    }

    return response.json()
}

export const useRespondenMutation = () => {
    return useMutation<ApiResponse, Error, DataResponden>(postDataResponden)
}
