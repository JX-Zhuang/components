import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { getPrefixCls } from '../../libs/styles';
import Notice, { INoticeProps } from './Notice';
import classNames from 'classnames';
export type NoticeType = 'info' | 'success' | 'error' | 'warning';
export type NotificationProps = {
  className?: string;
  notice: INoticeProps;
}; //& Readonly<typeof defaultProps>;
const Notification = (props: NotificationProps) => {
  const [notices, setNotices] = useState<INoticeProps[]>([]);
  const ref = useRef<INoticeProps[]>([]);
  const { className, notice } = props;
  const prefixCls = getPrefixCls('message');
  const classes = classNames(prefixCls, className);
  const onClose = (key: string) => {
    ref.current = ref.current.filter(notice => notice.key !== key);
    setNotices(ref.current);
  };
  const noticesComponents = notices.map((notice, index) => {
    const close = () => onClose(notice.key);
    return <Notice close={close} {...notice} />;
  });
  useEffect(() => {
    ref.current = notices.concat(notice);
    setNotices(ref.current);
  }, [notice]);
  return <div className={classes}>{noticesComponents}</div>;
};
let div: any = null;
Notification.newInstance = function (notice: INoticeProps) {
  if (!div) {
    div = document.createElement('div');
    document.body.appendChild(div);
  }
  ReactDOM.render(<Notification notice={notice} />, div);
};
export default Notification;
