export const getPrefixCls = (
  suffixCls: string,
  customizePrefixCls?: string
) => {
  if (customizePrefixCls) return customizePrefixCls;
  return suffixCls ? `style-${suffixCls}` : 'style';
};
