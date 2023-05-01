import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { InitBox } from './styled';

const ScrollToHashElement = () => {
  const { hash, key, pathname } = useLocation();
  const [init, setInit] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInit(true);
    }, 300);
  }, []);

  useEffect(() => {
    if (hash === '') {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');

        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView();
        }
      }, 0);
    }
  }, [hash, key, pathname]);

  if (init) {
    return null;
  }

  return <InitBox />;
};

export default ScrollToHashElement;
