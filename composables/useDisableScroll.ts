const useDisableScroll = () => {
  // call this to Disable
  const disableScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  // call this to Enable
  const enableScroll = () => {
    document.body.style.overflow = 'auto';
  };

  return { disableScroll, enableScroll };
};

export default useDisableScroll;
