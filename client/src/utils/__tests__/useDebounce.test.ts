import { renderHook, act } from '@testing-library/react-hooks';
import { useDebounce } from '../useDebounce';

jest.useFakeTimers();

test('should update value after specified delay', () => {
  const { result, rerender } = renderHook(({ value, delay }) => useDebounce(value, delay), {
    initialProps: { value: '', delay: 100 },
  });

  expect(result.current).toBe('');
  act(() => {
    jest.advanceTimersByTime(510);
  });
  expect(result.current).toBe('');

  rerender({ value: 'Foo', delay: 100 });

  expect(result.current).toBe('');
  act(() => {
    jest.advanceTimersByTime(110);
  });

  expect(result.current).toBe('Foo');

  rerender({ value: 'Bazz', delay: 230 });

  act(() => {
    jest.advanceTimersByTime(200);
  });

  expect(result.current).toBe('Foo');

  act(() => {
    jest.advanceTimersByTime(35);
  });

  expect(result.current).toBe('Bazz');
});
