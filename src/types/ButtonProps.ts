export interface ButtonProps {
  type?: 'primary' | 'ghost' | 'text' | 'danger';
  size?: 'mini' | 'small' | 'regular' | 'wide';
  event?: 'enabled' | 'hover' | 'click' | 'focus' | 'disabled';
  isArrow?: boolean;
}
