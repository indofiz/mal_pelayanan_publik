import * as React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'

import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerFooter,
} from '@/components/ui/drawer'
import ContentLayanan from './content-layanan'

export function ModalLayanan() {
    const [open, setOpen] = React.useState(true)
    const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

    if (isDesktop) {
        return (
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-[425px] md:max-w-5xl">
                    <ContentLayanan />
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerContent>
                <ContentLayanan />
                <DrawerFooter className="pt-2">
                    <DrawerClose asChild>
                        <Button variant="outline">Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>
    )
}
