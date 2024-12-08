import { useMediaQuery } from 'react-responsive'
import { Button } from '@/components/ui/button'
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
} from '@/components/ui/drawer'
import { usePencarianModalStore } from '@/store/modal/modal-pencarian'
import SearchModalContent from '@/features/hero-section/search-modal-content'
import { DialogDescription } from '@radix-ui/react-dialog'
import { ListLayananSearch } from '@/features/hero-section/list-layanan-search'

export function ModalPencarian() {
    const { setOpen, open } = usePencarianModalStore()
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] md:max-w-5xl px-4">
                    <DialogHeader>
                        <DialogTitle>Cari Layanan</DialogTitle>
                        <DialogDescription>
                            Masukan keyword pelayanan yang ingin anda cari.
                        </DialogDescription>
                    </DialogHeader>
                    <SearchModalContent />
                    <ListLayananSearch />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <DrawerHeader className="text-left">
                    <DrawerTitle>Cari Layanan</DrawerTitle>
                    <DrawerDescription>
                        Masukan keyword pelayanan yang ingin anda cari.
                    </DrawerDescription>
                </DrawerHeader>
                <SearchModalContent />
                <ListLayananSearch />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Kembali</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
