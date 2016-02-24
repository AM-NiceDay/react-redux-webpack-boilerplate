import React from 'react';
import { createRenderer } from 'react-addons-test-utils';
import expect from 'expect';
import expectJSX from 'expect-jsx';

expect.extend(expectJSX);

function Test() {
  return (
    <div>
      Test
    </div>
  );
}

describe('empty', () => {
  it('should work', () => {
    expect(true).toEqual(true);
  });

  it('should work with react', () => {
    const renderer = createRenderer();
    renderer.render(<Test />);
    const component = renderer.getRenderOutput();
    expect(component).toIncludeJSX('Test');
  });
});
