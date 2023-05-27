import { ReactNode, useState } from 'react';
import { animated, Spring } from '@react-spring/web';
import classNames from 'classnames';
import PopupTrigger from 'components/trigger/PopupTrigger';
import Popup, { PopupProps } from 'components/overlay/Popup';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './Tooltip.module.css';

export interface TooltipProps extends PopupProps {
  label: ReactNode;
  delay?: number;
  disabled?: boolean;
  action?: 'hover' | 'click' | 'none';
}

export function Tooltip(props: TooltipProps) {
  const {
    label,
    delay = 0,
    disabled = false,
    action = 'hover',
    position = 'top',
    alignment = 'none',
    className,
    style,
    children,
    ...domProps
  } = props;

  const defaultShow = action === 'none';
  const [show, setShow] = useState(defaultShow);

  const handleTrigger = value => {
    if (!defaultShow) {
      setShow(value);
    }
  };

  return (
    <PopupTrigger
      className={className}
      action={action}
      defaultShow={defaultShow}
      disabled={disabled}
      onTrigger={handleTrigger}
    >
      {children}
      {show && (
        <Popup position={position} alignment={alignment}>
          <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={delay}>
            {values => (
              <animated.div
                {...domProps}
                className={classNames(styles.tooltip, styles[position])}
                style={{ ...values, ...style }}
              >
                <div className={styles.body}>{label}</div>
              </animated.div>
            )}
          </Spring>
        </Popup>
      )}
    </PopupTrigger>
  );
}

export default Tooltip;
