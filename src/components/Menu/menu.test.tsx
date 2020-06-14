import React from 'react';
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Menu, {
    MenuProps
} from './menu'
import MenuItem from './menuItem'
const testProps: MenuProps = {
    defaultIndex: 0,
    className: 'test',
    onSelect: jest.fn()
}
const testVerProps: MenuProps = {
    defaultIndex: 0,
    mode: 'vertical'
}
const generateMenu = (props: MenuProps) => {
    return (
        <Menu {...props}>
            <MenuItem index={0}>
                active
            </MenuItem>
            <MenuItem disabled index={1}>
                disabled
            </MenuItem>
            <MenuItem index={2}>
                xsj
            </MenuItem>
        </Menu>
    )
}
let warpper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement
describe('test menu and menuitem component', () => {
    // 小妙招
    beforeEach(() => {
        warpper = render(generateMenu(testProps))
        menuElement = warpper.getByTestId('test-menu')
        activeElement = warpper.getByText('active')
        disabledElement = warpper.getByText('disabled')
    })
    it('should render correct Menu and MenuItem based on default props', () => {
        expect(menuElement).toBeInTheDocument()
        expect(menuElement).toHaveClass('jc-menu test')
        expect(menuElement.getElementsByTagName('li').length).toEqual(3)
        expect(activeElement).toHaveClass('menu-item is-active')
        expect(disabledElement).toHaveClass('menu-item is-disabled')
    })
    it('click items should change active and call the right callback', () => {
        const tItem = warpper.getByText('xsj')
        fireEvent.click(tItem)
        expect(tItem).toHaveClass('is-active')
        expect(activeElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).toHaveBeenCalledWith(2)
        fireEvent.click(disabledElement)
        expect(disabledElement).not.toHaveClass('is-active')
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
    })
    it('should render vertical mode when mode is set to vertical', () => {
        cleanup()
        const wrapper = render(generateMenu(testVerProps))
        const menuE = wrapper.getByTestId('test-menu')
        expect(menuE).toHaveClass('menu-vertical')
    })

})