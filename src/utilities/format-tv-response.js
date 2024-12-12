export default function formatTvData(response) {
  const result = [];
  response.forEach((serie) => {
    const newData = {
      ...serie,
      title: serie.name,
      original_title: serie.original_name,
    };

    result.push(newData);
  });

  // setTvSeries(result);
  return result;
}
