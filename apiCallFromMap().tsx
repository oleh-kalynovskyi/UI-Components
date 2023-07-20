const result = await Promise.all(
  results.data.map(async (item) => {
    const result = await createEntity(session, 'responsible-persons', item); // change to yours endpoint
    return result;
  })
);
setResult(result) // array of results
