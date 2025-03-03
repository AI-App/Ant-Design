import * as React from 'react';
import classNames from 'classnames';
import EllipsisOutlined from '@ant-design/icons/EllipsisOutlined';
import Button, { ButtonProps } from '../button';
import { ButtonHTMLType } from '../button/button';
import { ButtonGroupProps } from '../button/button-group';
import { ConfigContext } from '../config-provider';
import Dropdown, { DropDownProps } from './dropdown';

const ButtonGroup = Button.Group;

export type DropdownButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';

export interface DropdownButtonProps extends ButtonGroupProps, DropDownProps {
  type?: DropdownButtonType;
  htmlType?: ButtonHTMLType;
  disabled?: boolean;
  loading?: ButtonProps['loading'];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode;
  href?: string;
  children?: React.ReactNode;
  title?: string;
  buttonsRender?: (buttons: React.ReactNode[]) => React.ReactNode[];
}

interface DropdownButtonInterface extends React.FC<DropdownButtonProps> {
  __ANT_BUTTON: boolean;
}

const DropdownButton: DropdownButtonInterface = props => {
  const {
    getPopupContainer: getContextPopupContainer,
    getPrefixCls,
    direction,
  } = React.useContext(ConfigContext);

  const {
    prefixCls: customizePrefixCls,
    type = 'default',
    disabled,
    loading,
    onClick,
    htmlType,
    children,
    className,
    overlay,
    trigger,
    align,
    visible,
    onVisibleChange,
    placement,
    getPopupContainer,
    href,
    icon = <EllipsisOutlined />,
    title,
    buttonsRender = (buttons: React.ReactNode[]) => buttons,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
    ...restProps
  } = props;

  const prefixCls = getPrefixCls('dropdown-button', customizePrefixCls);
  const dropdownProps = {
    align,
    overlay,
    disabled,
    trigger: disabled ? [] : trigger,
    onVisibleChange,
    getPopupContainer: getPopupContainer || getContextPopupContainer,
    mouseEnterDelay,
    mouseLeaveDelay,
    overlayClassName,
    overlayStyle,
  } as DropDownProps;

  if ('visible' in props) {
    dropdownProps.visible = visible;
  }

  if ('placement' in props) {
    dropdownProps.placement = placement;
  } else {
    dropdownProps.placement = direction === 'rtl' ? 'bottomLeft' : 'bottomRight';
  }

  const leftButton = (
    <Button
      type={type}
      disabled={disabled}
      loading={loading}
      onClick={onClick}
      htmlType={htmlType}
      href={href}
      title={title}
    >
      {children}
    </Button>
  );

  const rightButton = <Button type={type} icon={icon} />;

  const [leftButtonToRender, rightButtonToRender] = buttonsRender!([leftButton, rightButton]);

  return (
    <ButtonGroup {...restProps} className={classNames(prefixCls, className)}>
      {leftButtonToRender}
      <Dropdown {...dropdownProps}>{rightButtonToRender}</Dropdown>
    </ButtonGroup>
  );
};

DropdownButton.__ANT_BUTTON = true;

export default DropdownButton;
