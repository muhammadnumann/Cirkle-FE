import remove from '/public/icons/remove.svg';
import Image from 'next/image';
interface CModal {
  id?: string;
  ClassName?: string;
  children?: React.ReactNode;
  tabIndex?: string;
  role?: string;
}
interface ModalContent {
  id?: string;
  ClassName?: string;
  children?: React.ReactNode;
}
interface ModalHeader {
  id?: string;
  ClassName?: string;
  children: React.ReactNode;
  title?: string;
}
interface ModalBody {
  id?: string;
  ClassName?: string;
  children?: React.ReactNode;
}
interface ModalFooter {
  ClassName?: string;
  children?: React.ReactNode;
}
export const CModal: React.FC<CModal> = ({ children, id }) => {
  return (
    <>
      <div
        className="modal modal-bg fade"
        id={id}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
        tabIndex={-1}
      >
        <div className="modal-dialog">{children}</div>
      </div>
    </>
  );
};
export const ModalContent: React.FC<ModalContent> = ({ children }) => {
  return <>{children && <div className=" customModalContent">{children}</div>}</>;
};
export const ModalHeader: React.FC<ModalHeader> = ({ children }) => {
  return (
    <>
      {children && (
        <div className="modal-header Cmodal-header">
          <div className="modal-title" id="exampleModalLabel">
            {children}
          </div>
          <div className="btn-clos" data-bs-dismiss="modal" aria-label="Close">
            <Image src={remove} alt="Picture of the author" />
          </div>
        </div>
      )}
    </>
  );
};
export const ModalBody: React.FC<ModalBody> = ({ children }) => {
  return <>{children && <div className="modal-body CModal-body modalDropdown">{children}</div>}</>;
};
export const ModalFooter: React.FC<ModalFooter> = ({ children }) => {
  return <>{children && <div className="modal-footer justify-content-evenly">{children}</div>}</>;
};
