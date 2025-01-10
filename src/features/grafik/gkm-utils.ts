import { IReportSKM } from '@/common/query/query-report-skm'

type OutputDataChart = {
    survey: string
    persentase: number
    fill: string
}

type ChartConfigOutput = {
    [key: string]: {
        label: string
        color?: string
    }
}
export function transformData(input: IReportSKM[]): OutputDataChart[] {
    return input.map((item) => {
        const survey = item.category.replace(/\s+/g, '_')
        const persentase = Math.round((item.average_answer * 100) / 4) // Mengonversi rata-rata menjadi persentase (skala 0-100)
        const fill = `var(--color-${survey})`

        return { survey, persentase, fill }
    })
}

export function transformToChartConfig(input: IReportSKM[]): ChartConfigOutput {
    // Warna berdasarkan aturan (hijau atau kuning bergantian)
    const colors = ['hsl(var(--chart-green))', 'hsl(var(--chart-yellow))']

    // Objek awal untuk persentase
    const result: ChartConfigOutput = {
        persentase: {
            label: 'Persentase',
        },
    }

    input.forEach((item, index) => {
        const key = item.category.replace(/\s+/g, '_')
        result[key] = {
            label: item.category,
            color: colors[index % colors.length], // Warna bergantian hijau/kuning
        }
    })

    return result
}
