import React, { createContext, useState } from 'react';
import classNames from 'classnames'
type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: number) => void;
export interface MenuProps {
    defaultIndex?: number;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: SelectCallback;
}
interface IMenuContext {
    index: number;
    onSelect?: SelectCallback;
}
export const MenuContext = createContext<IMenuContext>({ index: 0 })


const Menu: React.FC<MenuProps> = (props) => {
    const { className, mode, style, children, defaultIndex, onSelect } = props
    const [currentActive, setActive] = useState(defaultIndex)
    // 子组件currentActive要不要高亮  onselct函数
    const classes = classNames('jc-menu', className, {
        'menu-vertical': mode === 'vertical'
    })
    const passedContext: IMenuContext = {
        index: currentActive ? currentActive : 0,//联合类型currentActive undifined 和number类型
        onSelect: (index: number) => {
            setActive(index)
            // 假如
            if (onSelect) {
                onSelect(index)
            }
        }
    }
    return (
        <ul className={classes} style={style} data-testid="test-menu">
            <MenuContext.Provider value={passedContext} >
                {children}
            </MenuContext.Provider>
        </ul>
    )
}
Menu.defaultProps = {
    defaultIndex: 0,
    mode: 'horizontal',
}
export default Menu;