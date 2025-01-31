import {describe, test, expect} from '@jest/globals';
import Sidebar from './Sidebar';
import {fireEvent, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/jest-globals';
import {renderWithTranslation} from 'shared/lib/tests/renderWithTranslation/renderWithTranslation';

describe('Sidebar.tsx test', () => {
	test('test toBe', () => {
		renderWithTranslation(<Sidebar />);
		expect(screen.getByTestId('sidebar')).toBeInTheDocument();
	});

	test('test toggle Sidebar', () => {
		renderWithTranslation(<Sidebar />);
		const toggleBtn = screen.getByTestId('sidebar-button');
		const sidebar = screen.getByTestId('sidebar');

		expect(sidebar).not.toHaveClass('collapsed');
		fireEvent.click(toggleBtn);
		expect(sidebar).toHaveClass('collapsed');
	});
});
