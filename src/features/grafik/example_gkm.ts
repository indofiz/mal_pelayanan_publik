import { ChartConfig } from '@/components/ui/chart'

export const chartData = [
    { survey: 'PERSYARATAN', persentase: 56, fill: 'var(--color-PERSYARATAN)' },
    { survey: 'PROSEDUR', persentase: 34, fill: 'var(--color-PROSEDUR)' },
    {
        survey: 'KECEPATAN_LAYANAN',
        persentase: 12,
        fill: 'var(--color-KECEPATAN_LAYANAN)',
    },
    {
        survey: 'BIAYA_PELAYANAN',
        persentase: 32,
        fill: 'var(--color-BIAYA_PELAYANAN)',
    },
    {
        survey: 'INFORMASI_LAYANAN',
        persentase: 78,
        fill: 'var(--color-INFORMASI_LAYANAN)',
    },
    {
        survey: 'KOMPETENSI_PELAKSANA',
        persentase: 90,
        fill: 'var(--color-KOMPETENSI_PELAKSANA)',
    },
    {
        survey: 'PERILAKU_PELAYANAN',
        persentase: 90,
        fill: 'var(--color-PERILAKU_PELAYANAN)',
    },
    {
        survey: 'PENANGANAN_ADUAN',
        persentase: 100,
        fill: 'var(--color-PENANGANAN_ADUAN)',
    },
    {
        survey: 'SARANA_PRASARANA',
        persentase: 100,
        fill: 'var(--color-SARANA_PRASARANA)',
    },
]

export const chartConfig = {
    persentase: {
        label: 'Persentase',
    },
    PERSYARATAN: {
        label: 'PERSYARATAN',
        color: 'hsl(var(--chart-green))',
    },
    PROSEDUR: {
        label: 'PROSEDUR',
        color: 'hsl(var(--chart-yellow))',
    },
    KECEPATAN_LAYANAN: {
        label: 'KECEPATAN LAYANAN',
        color: 'hsl(var(--chart-green))',
    },
    BIAYA_PELAYANAN: {
        label: 'BIAYA PELAYANAN',
        color: 'hsl(var(--chart-yellow))',
    },
    INFORMASI_LAYANAN: {
        label: 'INFORMASI LAYANAN',
        color: 'hsl(var(--chart-green))',
    },
    KOMPETENSI_PELAKSANA: {
        label: 'KOMPETENSI PELAKSANA',
        color: 'hsl(var(--chart-yellow))',
    },
    PERILAKU_PELAYANAN: {
        label: 'PERILAKU PELAYANAN',
        color: 'hsl(var(--chart-green))',
    },
    PENANGANAN_ADUAN: {
        label: 'PENANGANAN ADUAN',
        color: 'hsl(var(--chart-yellow))',
    },
    SARANA_PRASARANA: {
        label: 'SARANA PRASARANA',
        color: 'hsl(var(--chart-green))',
    },
} satisfies ChartConfig
