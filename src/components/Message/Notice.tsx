import React, { useEffect, useRef, useState } from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
export type NoticeType = 'info' | 'success' | 'error' | 'warning';
export interface INoticeProps {
  type: NoticeType;
  key: string;
  content: string;
  close?(): any;
  icon?: React.ReactNode;
  duration?: number;
}
const Notice: React.FC<INoticeProps> = props => {
  const [leave, setLeave] = useState(false);
  const ref = useRef<any>({ closeTimer: null, animationTimer: null });
  const { content, close, type, icon, duration } = props;
  const prefixCls = getPrefixCls('message-content');
  const classes = classNames(prefixCls, {
    [`${prefixCls}-${type}`]: true,
    [`${prefixCls}-leave`]: leave
  });
  const startCloseTimer = () => {
    if (!duration) return;
    ref.current.animationTimer = window.setTimeout(() => {
      window.clearTimeout(ref.current.animationTimer);
      setLeave(true);
    }, (duration - 0.2) * 1000);
    ref.current.closeTimer = window.setTimeout(() => {
      clearCloseTimer();
      close && close();
    }, duration * 1000);
  };
  const clearCloseTimer = () => {
    if (ref.current.closeTimer) {
      window.clearTimeout(ref.current.closeTimer);
      ref.current.closeTimer = null;
    }
    if (ref.current.animationTimer) {
      window.clearTimeout(ref.current.animationTimer);
      ref.current.animationTimer = null;
    }
  };
  useEffect(() => {
    startCloseTimer();
    return clearCloseTimer;
  }, []);

  return (
    <div
      className={classNames(`${prefixCls}-box`, {
        [`${prefixCls}-box-leave`]: leave
      })}
    >
      <div
        className={classes}
        onMouseEnter={clearCloseTimer}
        onMouseLeave={startCloseTimer}
      >
        {icon}
        <div className={classNames(`${prefixCls}-text`)}>{content}</div>
      </div>
    </div>
  );
};
Notice.defaultProps = {
  duration: 3
};
export default Notice;
