import React from 'react';
import { shallow } from 'enzyme';
import RegistrationForm from './RegistrationForm';

describe('<RegistrationForm />', () => {
  let component;

  beforeEach(() => {
    component = shallow(<RegistrationForm />);
  });

  test('It should mount', () => {
    expect(component.length).toBe(1);
  });
});
