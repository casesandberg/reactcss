'use strict';

import { expect } from './helpers';
import combine from '../src/combine';

describe('Combine', () => {

  it('merge and expand css', () => {
    const before = [
      {
        page: {
          position: 'relative',
          background: '#fafafa',
        },
        header: {
          font: '24px Roboto 600 rgba(0,0,0,.87)',
        },
      }, {
        page: {
          background: '#333',
        },
        header: {
          color: 'rgba(255,255,255,.87)',
        },
        card: {
          borderRadius: '2',
        },
      },
    ];

    const after = {
      page: {
        position: 'relative',
        background: '#333',
      },
      header: {
        font: '24px Roboto 600 rgba(0,0,0,.87)',
        color: 'rgba(255,255,255,.87)',
      },
      card: {
        msBorderRadius: '2',
        MozBorderRadius: '2',
        OBorderRadius: '2',
        WebkitBorderRadius: '2',
        borderRadius: '2',
      },
    };

    expect(combine(before)).to.eql(after);
  });

  it('handle conditional styles', () => {
    const two = 2;

    const before = [
      {
        page: {
          position: 'relative',
          background: '#fafafa',
        },
        header: {
          font: '24px Roboto 600 rgba(0,0,0,.87)',
        },
      }, two === 3 ? {
        page: {
          background: '#333',
        },
        header: {
          color: 'rgba(255,255,255,.87)',
        },
        card: {
          BorderRadius: '2',
        },
      } : void 0, {
        element: {
          padding: '10px',
        },
      },
    ];

    const after = {
      page: {
        position: 'relative',
        background: '#fafafa',
      },
      header: {
        font: '24px Roboto 600 rgba(0,0,0,.87)',
      },
      element: {
        padding: '10px',
      },
    };

    expect(combine(before)).to.eql(after);
  });

});
