import { useModal } from "@/hooks/useModal";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ModalContainer = () => {
  const { isOpen, title, content, closeModal } = useModal();

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && closeModal()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold tracking-tight">
            {title}
          </DialogTitle>
        </DialogHeader>
        <div className="mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ModalContainer;
