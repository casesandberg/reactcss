import { css } from 'ReactCSS';

class Foo extends React.Component {

  constructor() {
    super();
    this.styles = this.styles.bind(this);
  }

  classes() {
    return {
      'default': {
        body: {
          background: '#fff',
        },
      },
    };
  }

  styles() {
    return css();
  }

  styles = () => css({
    fgsdfg: true,
  });

  render() {
    return (
      <div />
    );
  }
}
