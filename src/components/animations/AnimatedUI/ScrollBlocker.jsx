const ScrollBlocker = () => {
  const styles = {
    overlay: {
      position: 'absolute',
      zIndex: '100',
      width: '100%',
      height: '100%',
      // backgroundColor: 'rgba(255, 255, 255, 0.2)',
      background: 'transparent',
      overscrollBehavior: 'contain',
    },
  };

  return <div style={styles.overlay}></div>;
};

export default ScrollBlocker;
