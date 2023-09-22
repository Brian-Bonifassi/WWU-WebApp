const MobileOverlay = () => {
  const styles = {
    overlay: {
      position: 'absolute',
      width: '20%',
      height: '80%',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      border: '2px solid white',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  return <div style={styles.overlay}></div>
}

export default MobileOverlay
