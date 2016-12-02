import React from 'react';
import renderer from 'react-test-renderer';
import Index from '../src/components/index.js';


describe('Index (Snapshot)', () => {
  it('Index renders Index is me', () => {
    const component = renderer.create(<Index />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  })
})
