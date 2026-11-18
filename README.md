# Visit Konso

A trilingual English, Amharic and Afaan Oromoo guide to the Konso Cultural Landscape in southern Ethiopia. The site covers the landscape, the Konso people, visitor etiquette, practical travel details, stays around Karat, a flexible itinerary planner, a photo gallery and a trilingual Watch & learn section linking to YouTube documentary films about Konso’s landscape and living heritage.

## Run locally

Python 3.9 or later is required for the optional local server. The static site also works on a static host.

```sh
python3 server.py
```

Open <http://127.0.0.1:8000>.

## Content and sources

The site distinguishes moras (communal spaces), generation-marking stones, generation trees and waka memorial figures. UNESCO identifies the Konso Cultural Landscape as a 23,000 ha World Heritage property inscribed in 2011, and describes its living cultural tradition across 21 generations. UNESCO also describes the terraces, walled settlements, moras, traditional forests and communal water reservoirs that make up the landscape.

Before visiting traditional villages, the official Visit Ethiopia guidance directs visitors to the tourist information centre in Karat to arrange a mandatory local guide and pay current entrance fees. Fees, access, road conditions, flights and accommodation can change; the site links to current official guidance and advises visitors to confirm locally.

Each Wikimedia Commons photo links to its file page for the specific source, author and reuse licence. Community photos were shared for this guide. The site shows generic image-source labels rather than photographer names in its interface while preserving source and licence details.

## Languages

The home page and Gesergiyo guide provide English, Amharic and Afaan Oromoo versions, including the photo captions and alternative text. Lodging and other proper names remain in their official form. Afaan Oromoo copy should be reviewed by a fluent local speaker before publication.

## Performance

Only the first hero photo loads on initial render; the next slide loads ahead of use. Gallery images load lazily, locally supplied JPEGs are optimized as WebP, font downloads are non-blocking, and the home map is lazy-loaded. The service worker caches the lightweight site shell without preloading the photo collection.

## Hosting

For static hosting, upload the complete project folder. The Python API is optional; when it is unavailable, the site reads `data/konso-guide.json` directly. `netlify.toml` includes baseline headers for Netlify.
