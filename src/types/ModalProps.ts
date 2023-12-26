export interface ModalProps {
  width?: number;
  height?: number;
  visible?: boolean;
  style?: React.CSSProperties;
  onClose?: () => void;
}
