function ConsolService() {
  function log(value: any) {
    console.log(value);
  }

  function warn(value: any) {
    console.warn(value);
  }

  function error(value: any) {
    console.error(value);
  }

  return {
    log,
    warn,
    error,
  };
}

export default ConsolService;
