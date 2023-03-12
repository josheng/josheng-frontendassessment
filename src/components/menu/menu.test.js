import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

describe('Menu component', () => {
  it('should render without errors', () => {
    const wrapper = shallow(<Menu line1="Line 1" line2="Line 2" line3="Line 3" line4="Line 4" />);
    expect(wrapper).toBeTruthy();
  });

  it('should toggle the overlay when the button is clicked', () => {
    const wrapper = shallow(<Menu line1="Line 1" line2="Line 2" line3="Line 3" line4="Line 4" />);
    expect(wrapper.find('.overlay').exists()).toBe(false);

    wrapper.find('.menu').simulate('click');
    expect(wrapper.find('.overlay').exists()).toBe(true);

    wrapper.find('.menu').simulate('click');
    expect(wrapper.find('.overlay').exists()).toBe(false);
  });

  it('should close the overlay when the close button is clicked', () => {
    const wrapper = shallow(<Menu line1="Line 1" line2="Line 2" line3="Line 3" line4="Line 4" />);
    wrapper.find('.menu').simulate('click');
    expect(wrapper.find('.overlay').exists()).toBe(true);

    wrapper.find('.close-button').simulate('click');
    expect(wrapper.find('.overlay').exists()).toBe(false);
  });
});
