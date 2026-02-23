import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import SectionHeading from '@/components/SectionHeading';

describe('ErrorBoundary', () => {
  it('renders children when no error', () => {
    render(
      <ErrorBoundary>
        <div data-testid="child">Hello</div>
      </ErrorBoundary>
    );
    expect(screen.getByTestId('child')).toBeInTheDocument();
  });

  it('renders error UI when child throws', () => {
    function ThrowingComponent(): never {
      throw new Error('Test error');
    }

    // Suppress console.error for expected error
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ThrowingComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
    expect(screen.getByText('Reload page')).toBeInTheDocument();

    spy.mockRestore();
  });
});

describe('SectionHeading', () => {
  it('renders title', () => {
    render(<SectionHeading title="Test Title" />);
    expect(screen.getByText('Test Title')).toBeInTheDocument();
  });

  it('renders badge when provided', () => {
    render(<SectionHeading title="Test" badge="Badge Text" />);
    expect(screen.getByText('Badge Text')).toBeInTheDocument();
  });

  it('renders subtitle when provided', () => {
    render(<SectionHeading title="Test" subtitle="Sub text here" />);
    expect(screen.getByText('Sub text here')).toBeInTheDocument();
  });

  it('does not render subtitle when not provided', () => {
    const { container } = render(<SectionHeading title="Test" />);
    expect(container.querySelectorAll('p').length).toBe(0);
  });
});
