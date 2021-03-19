import Notification from './Notification';
import Icon from './Icon';
const message: any = {};
// todo  加入消失时间
['success', 'info', 'warning', 'error'].forEach((type: any) => {
  message[type] = function (content: JointContent, duration?: number) {
    Notification.newInstance({
      content: typeof content === 'string' ? content : content.content,
      type,
      key: String(Math.random() * 1000 + new Date().getTime()),
      icon: Icon[type],
      duration: typeof content === 'string' ? duration : content.duration
    });
  };
});
export type ConfigContent = string;
export interface IArgsProps {
  content: ConfigContent;
  duration?: number;
}
type JointContent = ConfigContent | IArgsProps;
export type open = (content: JointContent, duration?: number) => any;
export interface MessageApi {
  success: open;
  info: open;
  warning: open;
  error: open;
}
export default message;
