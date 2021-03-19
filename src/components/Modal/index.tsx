import OriginModal, { IModalProps as IOriginModalProps } from './Modal';
import confirm from './confirm';
export interface ModalStaticFunctions {
  info: any;
  success: any;
  error: any;
  warn: any;
  warning: any;
  confirm: any;
}
export type Modal = typeof OriginModal & ModalStaticFunctions;
const Modal = OriginModal as Modal;
Modal.confirm = confirm;
export interface IModalProps extends IOriginModalProps {}
export default Modal;
