export default defineSitemapEventHandler(async (e) => {
  const pages = await Promise.all([
    {
      _path: "/",
      modifiedAt: new Date(),
    },
    {
      _path: "/blue-lagoon-cruise",
      modifiedAt: new Date(),
    },
    {
      _path: "/paxos-antipaxos-cruise",
      modifiedAt: new Date(),
    },
  ]);
  return pages.map((t) => {
    return {
      loc: t._path,
      lastmod: t.modifiedAt,
    };
  });
});
