export const baseUrl = 'https://mpp.production.pangkalpinangkota.go.id/api/v1/'
export const baseUrlSkm = 'https://skm.pangkalpinangkota.go.id/api/'
const id_event = '0dade69f-7260-4a83-a96a-1b72a7e25169'

export const pekerjaanUrl = baseUrl + 'pekerjaan/list'
export const pendidikanUrl = baseUrl + 'pendidikan/list'
export const instansiUrl = baseUrl + 'instansi/list'
export const layananUrl = baseUrl + 'layanan/list'
export const layananDetailUrl = baseUrl + 'layanan/detail'
export const antrianDetailUrl = baseUrl + 'antrian/detail'
export const regulasiUrl = baseUrl + 'regulasi/list'
export const fasilitasUrl = baseUrl + 'fasilitas/list'
export const antrianUrl = baseUrl + 'antrian/save'

export const quisionerUrl = baseUrlSkm + 'event/' + id_event
export const reportSKMUrl = baseUrlSkm + 'reports/event/' + id_event
export const kunjunganHarianURL = baseUrl + 'dashboard/antrian/daily'
export const kunjunganMingguanURL = baseUrl + 'dashboard/antrian/weekly'
export const kunjunganBulananURL = baseUrl + 'dashboard/antrian/monthly'
export const surveyRespondenUrl =
    baseUrlSkm + 'survey/' + id_event + '/addresponden'
export const surveySubmitUrl = baseUrlSkm + 'survey/' + id_event + '/submit'
