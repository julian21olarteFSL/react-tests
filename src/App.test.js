import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCameWithSpaces } from './App';

test('Change the button color when clicked', () => {
  render(<App />)

  // find button by role and text
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  
  // test if button is red
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red',
    color: 'white'
  })
  
  // click the button and test the new color blue and text
  fireEvent.click(colorButton)
  
  expect(colorButton).toHaveStyle({
    backgroundColor: 'blue'
  })
  
  expect(colorButton.textContent).toBe('Change to red')

  // click the button again
  fireEvent.click(colorButton)

  // button text should be 'Change to blue'
  expect(colorButton.textContent).toBe('Change to blue')

  // test if button is red
  expect(colorButton).toHaveStyle({
    backgroundColor: 'red'
  })
});

test('Disable and enable button when checkbox is clicked', () => {
  render(<App />)
  
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  
  const checkBox = screen.getByRole('checkbox', { name: 'Disable button' })
  expect(checkBox).not.toBeChecked()
  
  fireEvent.click(checkBox)
  expect(checkBox).toBeChecked()
  // expect(checkBox.textContent).toBe('Enable button')
  expect(colorButton).toBeDisabled()
  expect(colorButton).toHaveStyle({
    backgroundColor: 'gray'
  })

  fireEvent.click(checkBox)
  expect(checkBox).not.toBeChecked()
  // expect(checkBox.textContent).toBe('Disable button')
  expect(colorButton).toBeEnabled()
  
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCameWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCameWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCameWithSpaces('ThisShouldWorks')).toBe('This Should Works')
  })
})