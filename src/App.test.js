import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

describe('disable and change button color', () => {

  test('Change the button color when clicked', () => {
    render(<App />)
  
    // find button by role and text
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
    
    // test if button is red
    expect(colorButton).toHaveStyle({
      backgroundColor: 'MediumVioletRed',
      color: 'white'
    })
    
    // click the button and test the new color blue and text
    fireEvent.click(colorButton)
    
    expect(colorButton).toHaveStyle({
      backgroundColor: 'MidnightBlue'
    })
    
    expect(colorButton.textContent).toBe('Change to Medium Violet Red')
  
    // click the button again
    fireEvent.click(colorButton)
  
    // button text should be 'Change to blue'
    expect(colorButton.textContent).toBe('Change to Midnight Blue')
  
    // test if button is red
    expect(colorButton).toHaveStyle({
      backgroundColor: 'MediumVioletRed'
    })
  });
  
  test('Disable and enable button when checkbox is clicked', () => {
    render(<App />)
    
    const colorButton = screen.getByRole('button', { name: 'Change to Midnight Blue' })
    expect(colorButton).toBeEnabled()
    
    const checkBox = screen.getByRole('checkbox', { name: 'Disable button' })
    expect(checkBox).not.toBeChecked()
    
    fireEvent.click(checkBox)
    expect(checkBox).toBeChecked()
    expect(colorButton).toBeDisabled()
    expect(colorButton).toHaveStyle({
      backgroundColor: 'gray'
    })
  
    fireEvent.click(checkBox)
    expect(checkBox).not.toBeChecked()
    expect(colorButton).toBeEnabled()
    
  })
})

describe('spaces before camel-case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('ThisShouldWorks')).toBe('This Should Works')
  })
})