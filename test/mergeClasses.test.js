import mergeClasses from '../src/mergeClasses'

describe('Combine', () => {
  it('should return default', () => {
    const classes = {
      default: {
        header: {
          margin: '0px',
        },
      },
    }
    const after = {
      header: {
        margin: '0px',
      },
    }
    expect(mergeClasses(classes)).toEqual(after)
  })

  it('should not return merged classes that are not active', () => {
    const classes = {
      default: {
        header: {
          margin: '0px',
        },
      },
      active: {
        header: {
          color: '#333',
        },
      },
    }
    const names = []
    const after = {
      header: {
        margin: '0px',
      },
    }
    expect(mergeClasses(classes, names)).toEqual(after)
  })

  it('should return basic merged css', () => {
    const classes = {
      default: {
        header: {
          margin: '0px',
        },
      },
      active: {
        header: {
          color: '#333',
        },
      },
    }
    const names = ['active']
    const after = {
      header: {
        margin: '0px',
        color: '#333',
      },
    }
    expect(mergeClasses(classes, names)).toEqual(after)
  })

  it('should return overlaping css', () => {
    const classes = {
      'default': {
        header: {
          margin: '0px',
          background: '#aeee00',
        },
      },
      'active': {
        header: {
          color: '#333',
          background: '#eee',
        },
        logo: {
          color: 'blue',
        },
      },
      'zIndex-2': {
        header: {
          boxShadow: '0 2px 4px rgba(0,0,0,.2)',
        },
      },
    }
    const names = ['active', 'zIndex-2']
    const after = {
      header: {
        margin: '0px',
        color: '#333',
        background: '#eee',
        boxShadow: '0 2px 4px rgba(0,0,0,.2)',
      },
      logo: {
        color: 'blue',
      },
    }
    expect(mergeClasses(classes, names)).toEqual(after)
  })

  it('should not mutate default classes when merging', () => {
    const classes = {
      default: {
        header: {
          margin: '0px',
        },
      },
      active: {
        header: {
          color: '#333',
        },
      },
    }
    const names = ['active']
    const after1 = {
      header: {
        margin: '0px',
        color: '#333',
      },
    }
    const after2 = {
      header: {
        margin: '0px',
      },
    }
    expect(mergeClasses(classes, names)).toEqual(after1)
    expect(mergeClasses(classes, [])).toEqual(after2)
  })
})
