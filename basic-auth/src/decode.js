import bas64 from "base-64";

export const decodeCredentials = (authHeader) => {

  const encodedCredentials = authHeader.trim().replace(/Basic\s+/i, "");

  const decodedCredentials = bas64.decode(encodedCredentials);
  
  return decodedCredentials.split(":");
};
