# Visit Konso

A trilingual English, Amharic and Afaan Oromoo guide to the Konso Cultural Landscape in southern Ethiopia. The site covers the landscape, the Konso people, visitor etiquette, practical travel details, stays around Karat, a flexible itinerary planner, a photo gallery and a trilingual Watch & learn section linking to YouTube documentary films about Konso’s landscape and living heritage.

## Run locally

This is a static site; no build step or server application is required. From the project folder, serve it with any static file server:

```sh
python3 -m http.server 8000
```

Open <http://127.0.0.1:8000>.

## Content and sources

The site distinguishes moras (communal spaces), generation-marking stones, generation trees and waka memorial figures. UNESCO identifies the Konso Cultural Landscape as a 23,000 ha World Heritage property inscribed in 2011, and describes its living cultural tradition across 21 generations. UNESCO also describes the terraces, walled settlements, moras, traditional forests and communal water reservoirs that make up the landscape.

Before visiting traditional villages, the official Visit Ethiopia guidance directs visitors to the tourist information centre in Karat to arrange a mandatory local guide and pay current entrance fees. Fees, access, road conditions, flights and accommodation can change; the site links to current official guidance and advises visitors to confirm locally.

All photographs are served locally as optimised WebP files, including the gallery thumbnails and video thumbnails. Image source and licence links are not shown in the interface; attribution details are kept in the project history and asset filenames.

## Languages

The home page and Gesergiyo guide provide English, Amharic and Afaan Oromoo versions, including the photo captions and alternative text. Lodging and other proper names remain in their official form. Afaan Oromoo copy should be reviewed by a fluent local speaker before publication.

## Performance

Only the first hero photo loads on initial render; the next slide loads ahead of use. Gallery images load lazily, locally supplied JPEGs are optimized as WebP, font downloads are non-blocking, and the home map is lazy-loaded. The service worker caches the lightweight site shell without preloading the photo collection.

## Hosting

For static hosting, upload the complete project folder. The itinerary and guide content comes from `data/konso-guide.json`. `netlify.toml` includes baseline headers for Netlify.
