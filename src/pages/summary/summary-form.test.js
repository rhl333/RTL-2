import { render, screen, waitFor } from '@testing-library/react';
import { SummaryForm } from './summary-form';
import userEvent from '@testing-library/user-event';

describe('Summaryform', () => {
  it('should render initially', () => {
    render(<SummaryForm />);

    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeEnabled();

    const checkBox = screen.getByRole('checkbox', { name: 'checkbox' });
    expect(checkBox).not.toBeChecked();
  });

  it('when checkbox is checked, button should be disabled', async () => {
    render(<SummaryForm />);

    const button = screen.getByRole('button', { name: /click me/i });
    const checkBox = screen.getByRole('checkbox', { name: 'checkbox' });
    userEvent.click(checkBox);
    await waitFor(() => {
      expect(checkBox).toBeChecked();
    });
    await waitFor(() => {
      expect(button).toBeDisabled();
    });
  });
});
