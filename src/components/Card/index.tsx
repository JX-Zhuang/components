import React from 'react';
import { getPrefixCls } from '../../libs/styles';
import classNames from 'classnames';
import Button, { IButtonProps } from '../Button';
export interface IStep {
  title: string;
  key: string;
  name: string;
}
export interface ICardProps {
  className?: string;
  /** 标题*/
  title?: string;
  description?: string;
  imgUrl?: string;
  action?: IButtonProps;
  [x: string]: any;
}
const Card: React.FC<ICardProps> = props => {
  const { className, imgUrl, title, description, action, ...rest } = props;
  const prefixCls = getPrefixCls('card');
  const prefixClsBody = getPrefixCls('card-body');
  const prefixClsBodyTitle = getPrefixCls('card-body-title');
  const prefixClsBodyDescription = getPrefixCls('card-body-description');
  const classes = classNames(prefixCls, className);
  return (
    <div className={classes} {...rest}>
      {imgUrl ? <img src={imgUrl} alt="card_pic" width="100%" /> : null}
      <div className={classNames(prefixClsBody)}>
        {title ? (
          <div className={classNames(prefixClsBodyTitle)}>{title}</div>
        ) : null}
        {description ? (
          <div className={classNames(prefixClsBodyDescription)}>
            {description}
          </div>
        ) : null}
        {action ? <Button type="primary" {...action} /> : null}
      </div>
    </div>
  );
};
export default Card;
