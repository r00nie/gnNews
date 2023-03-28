import React from 'react';
import Header from './components/Header';
import Articles from './components/Articles';

const articles = [
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "WP Wiadomości",
  "title": "\"Morderca numer jeden\". Ujawniono personalia kata Mariupola - WP Wiadomości",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiY2h0dHBzOi8vd2lhZG9tb3NjaS53cC5wbC9tb3JkZXJjYS1udW1lci1qZWRlbi11amF3bmlvbm8tcGVyc29uYWxpYS1rYXRhLW1hcml1cG9sYS02ODgxMjU1MDMxNjAxOTUyYdIBaWh0dHBzOi8vd2lhZG9tb3NjaS53cC5wbC9tb3JkZXJjYS1udW1lci1qZWRlbi11amF3bmlvbm8tcGVyc29uYWxpYS1rYXRhLW1hcml1cG9sYS02ODgxMjU1MDMxNjAxOTUyYT9hbXA9MQ?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T09:02:08Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Gazeta",
  "title": "W kryminałach Agathy Christie zmienił się \"obraźliwy język\". Chodzi m.in. o Żydów i Cyganów - Gazeta",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMicmh0dHBzOi8va3VsdHVyYS5nYXpldGEucGwva3VsdHVyYS83LDExNDYyOCwyOTYwNDg3MSx3LWtyeW1pbmFsYWNoLWFnYXRoeS1jaHJpc3RpZS16bWllbmlsLXNpZS1vYnJhemxpd3ktamV6eWsuaHRtbNIBcWh0dHBzOi8va3VsdHVyYS5nYXpldGEucGwva3VsdHVyYS83LDExNDYyOCwyOTYwNDg3MSx3LWtyeW1pbmFsYWNoLWFnYXRoeS1jaHJpc3RpZS16bWllbmlsLXNpZS1vYnJhemxpd3ktamV6eWsuYW1w?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T09:00:00Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "turystyka.wp.pl",
  "title": "Wyjątkowe zjawisko na niebie. Warto tego dnia spojrzeć w niebo - turystyka.wp.pl",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiZ2h0dHBzOi8vdHVyeXN0eWthLndwLnBsL3d5amF0a293ZS16amF3aXNrby1uYS1uaWViaWUtd2FydG8tdGVnby1kbmlhLXNwb2pyemVjLXctbmllYm8tNjg4MTIyOTE2MDQzMDM2OGHSAW1odHRwczovL3R1cnlzdHlrYS53cC5wbC93eWphdGtvd2Utemphd2lza28tbmEtbmllYmllLXdhcnRvLXRlZ28tZG5pYS1zcG9qcnplYy13LW5pZWJvLTY4ODEyMjkxNjA0MzAzNjhhP2FtcD0x?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T08:40:29Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "WP Wiadomości",
  "title": "Tragiczny poranek. Dwie osoby zatruły się tlenkiem węgla - WP Wiadomości",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMiYmh0dHBzOi8vd2lhZG9tb3NjaS53cC5wbC90cmFnaWN6bnktcG9yYW5lay1kd2llLW9zb2J5LXphdHJ1bHktc2llLXRsZW5raWVtLXdlZ2xhLTY4ODEyNTA2NDc1NTQ4NDhh0gFoaHR0cHM6Ly93aWFkb21vc2NpLndwLnBsL3RyYWdpY3pueS1wb3JhbmVrLWR3aWUtb3NvYnktemF0cnVseS1zaWUtdGxlbmtpZW0td2VnbGEtNjg4MTI1MDY0NzU1NDg0OGE_YW1wPTE?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T08:40:28Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Onet",
  "title": "Kierowco, uważaj na nowe fotoradary. Wykryją niejeden twój błąd - Onet",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMifGh0dHBzOi8vd3d3Lm9uZXQucGwvaW5mb3JtYWNqZS9vbmV0d2lhZG9tb3NjaS9raWVyb3djby11d2F6YWotbmEtbm93ZS1mb3RvcmFkYXJ5LXd5a3J5amEtbmllamVkZW4tdHdvai1ibGFkLzg1a3pndngsNzljZmMyNzjSAQA?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T08:32:19Z",
  "content": null
  },
  {
  "source": {
  "id": "google-news",
  "name": "Google News"
  },
  "author": "Interia Wydarzenia",
  "title": "Donald Tusk wskazuje na szpitale: Prawie wszędzie słyszeliśmy uzasadnione lamenty - Interia Wydarzenia",
  "description": null,
  "url": "https://news.google.com/rss/articles/CBMicGh0dHBzOi8vd3lkYXJ6ZW5pYS5pbnRlcmlhLnBsL2tyYWovbmV3cy1kb25hbGQtdHVzay13c2thenVqZS1uYS1zenBpdGFsZS1wcmF3aWUtd3N6ZWR6aWUtc2x5c3plbGlzbXksbklkLDY2ODI3ODHSAXNodHRwczovL3d5ZGFyemVuaWEuaW50ZXJpYS5wbC9rcmFqL25ld3NhbXAtZG9uYWxkLXR1c2std3NrYXp1amUtbmEtc3pwaXRhbGUtcHJhd2llLXdzemVkemllLXNseXN6ZWxpc215LG5JZCw2NjgyNzgx?oc=5",
  "urlToImage": null,
  "publishedAt": "2023-03-28T08:25:35Z",
  "content": null
  }]

const App: React.FC = () => {
  return (
    <div className="App">
      <Header title="GN News" />
      <Articles articles={articles} />
    </div>
  );
};

export default App;
