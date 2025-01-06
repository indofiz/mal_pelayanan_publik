import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

import { useLayananDeskripsiModalStore } from '@/store/modal/modal-deskripsi-layanan'

export function ModalLayananDeskripsi() {
    const { open, setOpen, formData } = useLayananDeskripsiModalStore()
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent className="sm:max-w-[425px] md:max-w-md px-4">
                <DialogHeader>
                    <DialogTitle>{formData?.layanan ?? ''}</DialogTitle>
                </DialogHeader>
                {formData && formData?.deskripsi}
            </DialogContent>
        </Dialog>
    )
}
