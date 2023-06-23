import { forwardRef, ReactNode, Ref } from 'react';
import { CommonProps } from 'components/types';
import classNames from 'classnames';
import usePopup from 'hooks/usePopup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Popup.module.css';

export interface PopupProps extends CommonProps {
  position?: 'top' | 'bottom' | 'left' | 'right';
  alignment?: 'start' | 'end' | 'center';
  popupElement?: ReactNode;
}

function Popup(props: PopupProps, forwardedRef?: Ref<HTMLDivElement>) {
  const { close } = usePopup();
  const {
    position = 'bottom',
    alignment = 'center',
    popupElement,
    className,
    children,
    ...domProps
  } = props;

  return (
    <div
      {...domProps}
      ref={forwardedRef}
      className={classNames(styles.popup, className, styles[position], styles[alignment])}
    >
      {typeof children === 'function' ? children(close, popupElement) : children}
    </div>
  );
}

const _Popup = forwardRef<HTMLDivElement, PopupProps>(Popup) as typeof Popup;

export { _Popup as Popup };

export default _Popup;
