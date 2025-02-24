import DOMPurify from 'dompurify'

function createMarkup(dirty: string) {
    return { __html: DOMPurify.sanitize(dirty) }
}

export { createMarkup }
