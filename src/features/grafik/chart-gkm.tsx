import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from '@/components/ui/chart'
import { Bar, BarChart, XAxis, YAxis } from 'recharts'
const chartData = [
    { survey: 'chrome', persentase: 56, fill: 'var(--color-chrome)' },
    { survey: 'safari', persentase: 34, fill: 'var(--color-safari)' },
    { survey: 'firefox', persentase: 12, fill: 'var(--color-firefox)' },
    { survey: 'edge', persentase: 32, fill: 'var(--color-edge)' },
    { survey: 'other', persentase: 78, fill: 'var(--color-other)' },
    { survey: 'other', persentase: 90, fill: 'var(--color-other)' },
    { survey: 'other', persentase: 90, fill: 'var(--color-other)' },
    { survey: 'chrome', persentase: 100, fill: 'var(--color-other)' },
]

const chartConfig = {
    persentase: {
        label: 'Persentase',
    },
    chrome: {
        label: 'Persyaratan',
        color: 'hsl(var(--chart-1))',
    },
    safari: {
        label: 'Safari',
        color: 'hsl(var(--chart-2))',
    },
    firefox: {
        label: 'Kompetensi Pelaksana',
        color: 'hsl(var(--chart-3))',
    },
    edge: {
        label: 'Edge',
        color: 'hsl(var(--chart-4))',
    },
    other: {
        label: 'Other',
        color: 'hsl(var(--chart-5))',
    },
} satisfies ChartConfig

const ChartGKM = () => {
    return (
        <div className="h-[240px] w-full">
            <ChartContainer className="h-full w-full" config={chartConfig}>
                <BarChart
                    accessibilityLayer
                    data={chartData}
                    layout="vertical"
                    margin={{
                        left: 28,
                    }}
                >
                    <YAxis
                        dataKey="survey"
                        type="category"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) =>
                            chartConfig[value as keyof typeof chartConfig]
                                ?.label
                        }
                        domain={[0, 100]}
                    />
                    <XAxis dataKey="persentase" type="number" hide />
                    <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent hideLabel />}
                    />
                    <Bar dataKey="persentase" layout="vertical" radius={5} />
                </BarChart>
            </ChartContainer>
        </div>
    )
}

export default ChartGKM
