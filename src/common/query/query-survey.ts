import { useMutation } from 'react-query'
import { surveySubmitUrl } from '../url'

export interface ApiResponse {
    status: boolean
    message: string
    data: string
}

export interface DataQuestion {
    questionerId: string
    answer: string
}

export interface DataSurvey {
    respondenId?: string
    answerList: DataQuestion[]
}

const postDataSurvey = async (data: DataSurvey): Promise<ApiResponse> => {
    const response = await fetch(surveySubmitUrl, {
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

export const useSurveyMutation = () => {
    return useMutation<ApiResponse, Error, DataSurvey>(postDataSurvey)
}
