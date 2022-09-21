export const fetchAdsDataFromDatabase = async (id) => {
  if (id == undefined) return;
  console.log(id);

  const res = await fetch(`http://localhost:8000/ads/` + id);
  const data = await res.json();

  return data;
};
