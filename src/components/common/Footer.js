import React from 'react';
import logo from '../../assets/img/footer_logo.svg';

const Footer = () => {
  return (
    <div style={ styles.footer }>
      <div style={ styles.ftwrap }>
        <div style={ styles.logo }>
          <img src={ logo } style={ styles.logosvg } alt="logo" />
        </div>
      </div>
    </div>
  );
}

const styles = {
  footer: {
    height: '200px',
    position: 'relative',
    paddingTop: '53.3%',
    marginTop: '4px',
    background: 'url(//s3.music.126.net/m/s/img/recommand_bg_2x.png?d045faf…) no-repeat',
    backgroundSize: 'contain',
  },
  ftwrap: {
    position: 'absolute',
    left: '0',
    right: '0',
    bottom: '0',
    top: '0',
    zIndex: '1',
    textAlign: 'center',
  },
  logo: {
    paddingTop: '16.9%',
  },
  logosvg: {
    display: 'block',
    margin: '0 auto',
    width: '230px',
    height: '44px',
  }
}

export default Footer;