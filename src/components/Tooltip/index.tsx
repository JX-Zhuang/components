import React, { useState } from 'react';
import Pop from './Pop';
export type TooltipPlacement = 'top' | 'bottom';
export interface ITooltipProps {
  children: React.ReactNode;
  content?: React.ReactNode;
  prefixCls?: string;
  title?: string;
  className?: string;
  placement?: TooltipPlacement;
}
const getTop = (e: HTMLElement): number => {
  return e.getBoundingClientRect().top + document.documentElement.scrollTop;
};
const getLeft = (e: HTMLElement): number => {
  return e.getBoundingClientRect().left + document.documentElement.scrollLeft;
};
const Tooltip: React.FC<ITooltipProps> = props => {
  const [show, setShow] = useState(false);
  const [style, setStyle] = useState<any>({});
  const { children, title, className, ...rest } = props;
  const showPop = () => setShow(true);
  const hiddenPop = () => setShow(false);
  const child = React.Children.only(children) as React.ReactElement;
  const trigger = React.cloneElement(child, {
    onMouseEnter: (e: React.MouseEvent<HTMLElement, HTMLInputElement>) => {
      const element = e.currentTarget as HTMLElement;
      let top = getTop(element); //- element.offsetHeight - 12;
      let left = getLeft(element) + element.offsetWidth / 2;
      let transform = 'translate(-50%, -100%)';
      if (props.placement === 'bottom') {
        top = getTop(element) + element.offsetHeight + 1; //- element.offsetHeight - 12;
        left = getLeft(element) + element.offsetWidth / 2;
        transform = 'translate(-50%, 0)';
      }
      setStyle({
        top: `${top}px`,
        left: `${left}px`,
        transform
      });
      showPop();
    },
    onMouseLeave: () => {
      setShow(false);
    }
  });
  return (
    <React.Fragment>
      {trigger}
      <Pop
        show={show}
        style={style}
        onMouseEnter={showPop}
        onMouseLeave={hiddenPop}
        content={title}
        {...rest}
      />
    </React.Fragment>
  );
};
Tooltip.defaultProps = {
  placement: 'top' as TooltipPlacement
};
export default Tooltip;
