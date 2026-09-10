import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import Header from './Header';

describe('Header', () => {
    const text = 'Nice lovely logo';
    const logo = () => <div>{text}</div>;

    it('should render functional component passed through Logo prop', () => {
        const { getByText } = render(<Header Logo={logo} />);

        expect(getByText(text)).toBeInTheDocument();
    });

    it.each([
        { name: 'John Dou', initials: 'JD' },
        { name: 'John', initials: 'J' },
    ])('should render username $name as plain text and as initials', async ({ name, initials }) => {
        const { getByTestId } = render(<Header Logo={logo} userName={name} />);

        const userMenuButton = getByTestId('open-user-menu-button');
        await userEvent.click(userMenuButton);

        const userNameContainer = getByTestId('user-name');

        expect(userMenuButton).toHaveTextContent(initials);

        if (name) {
            expect(userNameContainer).toHaveTextContent(name);
        } else {
            expect(userNameContainer).toBeEmptyDOMElement();
        }
    });

    it('should call onLogout function when user clicks logout button', async () => {
        const logout = jest.fn();

        const { getByTestId, getByText } = render(<Header Logo={logo} onLogout={logout} />);

        const userMenuButton = getByTestId('open-user-menu-button');
        await userEvent.click(userMenuButton);

        const logoutButton = getByText('Log out');
        await userEvent.click(logoutButton);

        expect(logout).toHaveBeenCalled();
    });
});
