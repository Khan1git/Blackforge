// Temporary editorial photography. Replace these remote URLs with local,
// licensed images in /public before launch.
const unsplash = (id: string, width = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=80`;

export const visuals = {
  hero: unsplash("photo-1485871981521-5b1fd3805eee", 2200),
  cta: unsplash("photo-1521737604893-d14cc237f11d", 2200),
  services: {
    cybersecurity: unsplash("photo-1550751827-4bd374c3f58b", 1200),
    ai: unsplash("photo-1677442136019-21780ecad995", 1200),
  },
};

export const projectImages = {
  menumate: unsplash("photo-1517248135467-4c7edcad34c4", 1600),
  centralParkNews: unsplash("photo-1504711434969-e33886168f5c", 1600),
  crossBayCurrent: unsplash("photo-1439405326854-014607f694d7", 1600),
  crossBayNews: unsplash("photo-1449824913935-59a10b8d2000", 1600),
  barExamNews: unsplash("photo-1589391886645-d51941baf7fb", 1600),
  howardBeachNews: unsplash("photo-1519046904884-53103b34b206", 1600),
};
