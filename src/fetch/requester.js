const requester = async (endpoint = "launch/upcoming") => {
  const url = `https://lldev.thespacedevs.com/2.2.0/${endpoint}/?format=json`;
  const resp = await fetch(url);

  return resp.json();
};

export default requester;
