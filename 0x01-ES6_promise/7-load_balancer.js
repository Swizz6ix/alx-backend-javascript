export default async function loadBalancer(chinaDownload, USDownload) {
  const value = await Promise.race([chinaDownload, USDownload]);
  return value;
}
