import { useQuery } from 'react-query'
import { quisionerUrl } from '../url'

interface IEvent {
    status: boolean
    message: string
    data: IDataEvent
}
interface IDataEvent {
    id: string
    title: string
    description: string
    startDate: string
    endDate: string
    userId: string
    createdAt: string
    updatedAt: string
    quesioners: IQuesioner[]
}
export interface IQuesioner {
    id: string
    question: string
    quesionerType: string
    eventId: string
    createdAt: string
    updatedAt: string
    quesionerAnswer: IQuesionerAnswer[]
}
interface IQuesionerAnswer {
    id: string
    sign: string
    value: string
    createdAt: string
    updatedAt: string
}

export const useEventQuery = () => {
    return useQuery<IEvent>('event-quisioner', async () => {
        const response = await fetch(quisionerUrl)
        const data: IEvent = await response.json()

        if (!response.ok || !data.status) {
            throw new Error('Network response was not ok')
        }

        return data
    })
}
