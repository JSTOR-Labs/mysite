<a href="https://juncture-digital.org"><img src="https://juncture-digital.org/images/ve-button.png"></a>

<param ve-config 
       title="Chili Pepper"
       author="Hallie Pugh-Sellers"
       banner="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Capsicum_annuum.JPG/1280px-Capsicum_annuum.JPG" 
       layout="vertical">

<!-- Entities discussed throughout the essay are typically defined before the essay text and
     are thus available in all text.  Entity identifiers (QIDs) can be found in either
     Wikipedia or Wikidata (https://www.wikidata.org)> -->
<param ve-entity eid="Q185372"> <!-- Girl with a Pearl Earring painting -->
<param ve-entity eid="Q41264"> <!-- Johannes Vermeer -->
<param ve-entity eid="Q221092"> <!-- Mauritshuis -->
<param ve-entity eid="Q36600"> <!-- The Hague -->
<param ve-entity eid="Q60"> <!-- New York City -->

# Sample visual essay

This is a sample visual essay demonstrating a few key features of a Visual Essay. Additional [Documentation](https://github.com/JSTOR-Labs/juncture/wiki) and [examples](https://jstor-labs.github.io/juncture-examples) are available for reference.Information about <span data-click-image-zoomto="1128,1424,1494,1255">image interactions</span> can be found [here](https://github.com/JSTOR-Labs/juncture/wiki/Visual-Essay-Image-Tag).
<param ve-image 
       manifest="https://ids.si.edu/ids/manifest/ark:/65665/m306712a081ec0459b90083f05d35455ec">

# Basic usage

## Image

_Hyacinthus orientalis_ is a garden ornamental distinguish by its columnar spike of waxy flowers. Much of the hyacinth’s story, however, actually revolves around its bulb. Reconstructing this narrative reveals how the hyacinth bulb contributed to the plant’s survival in its native range over millennia, enabled its mobility in trade networks under the Ottoman Empire, and culminated in its use for forcing indoors at the French court from the mid-1740s. Today, this story can also raise awareness of the environmental impact of the Dutch flower bulb trade and the need for sustainable solutions in modern flower gardening.[^1]
<param ve-image 
       label="Girl with a Pearl Earring" 
       description="painting by Johannes Vermeer" 
       license="public domain" 
       url="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Capsicum_annuum.JPG/1280px-Capsicum_annuum.JPG">
       <param ve-entity eid="Q157428"> <!-- Hyacinthus orientalis -->
       
If possible, please use digital images and other resources that are free and open access. A list of open access image collections for artworks that are out of copyright can be found [here.](https://www.apollo-magazine.com/open-access-image-libraries-a-handy-list/) Photographs of plants with a Creative Commons license can be accessed on [Openverse](https://wordpress.org/openverse/) and [iNaturalist.](https://www.inaturalist.org/). When uploading a personal image to GitHub, use a [Creative Commons](https://creativecommons.org/licenses/) license.
<param ve-image url="https://github.com/JSTOR-Labs/plant-humanities/blob/staging-7/chili_pepper/SurinamesePeppers_DavidEvers_UseWithAttribution.jpeg?raw=true" label="Surinamese Peppers by David Evers, Flickr, CC by 2.0" fit="cover">

Visit the [Visual Essay Image Tag](https://github.com/jstor-labs/juncture/wiki/Visual-Essay-Image-Tag) to learn about customizing image display. The region attribute (region="0,421,3192,2590") is used to show a cropped region of an image in the image viewer. And the fit attribute defines how an image will be scaled or cropped in the image viewer window.
<param ve-compare curtain manifest="https://iiif.lib.harvard.edu/manifests/drs:485943395" seq="147">
<param ve-compare manifest="https://iiif.juncture-digital.org/manifest/c5e3bb5b8f05a40314bba386bdc2df7bc32818a04dae348d0450feb3b63c5520" fit="contain">

Full digital facsimiles of select titles in the Dumbarton Oaks Rare Book Collection can be accessed [here.](https://www.doaks.org/resources/rare-books#c6-operator=or&c7-operator=or&b_start=0) You are welcome to work with our [Rare Book team](https://www.doaks.org/research/library-archives/rare-book-collection) to find something to feature.
<param ve-compare sync fit="contain" manifest="https://iiif.lib.harvard.edu/manifests/drs:436574052" seq="291">
<param ve-compare manifest="https://iiif.juncture-digital.org/manifest/c5e3bb5b8f05a40314bba386bdc2df7bc32818a04dae348d0450feb3b63c5520" fit="contain">

## Plant Specimen

Linnaeus further implored English nurseryman James Gordon for live specimens in 1772, to no avail. He was nonetheless susceptible to the awe *Dionaea* inspired, and his incredulity regarding the deadly trapping mechanism might simply be attributed to the lack of necessary empirical evidence. The flattened, dried, and inert specimens he received from correspondents failed to show the speed and precision of the lethal snap-trap in action and understandably inspired the impression of a sleeping eyelid, as Linnaeus described in his letter to Burman.
<param ve-plant-specimen jpid="10.5555/al.ap.specimen.linn-hl249-3" label="Lectotype of Capsicum baccatum L, Linnean Society of London Herbarium.">

## YouTube Video

Today, black-eyed peas are grown commercially in at least 33 countries, reflecting the widespread embrace of the bean among geographically disparate peoples, places, and cultures. As acclaimed food historian and chef <span eid="Q49562413">Michael W. Twitty</span> points out: “Very few people in the modern West eat one cuisine or live within one culinary construct,” but rather enjoy a multiplicity of culinary histories.
<param ve-video id="U9DyHthJ6LA" title="Hot Ones" author="First We Feast">

## Map

The work has been in the collection of the Mauritshuis in The Hague since 1902 and has been the subject of various 
literary treatments. In 2006, the Dutch public selected it as the most beautiful painting in the Netherlands.
<param ve-map center="Q36600" zoom="11" prefer-geojson>

The Frick Collection in New York City has four paintings by Vermeer. Unlike  _Girl with a Pearl Earring_, the Frick Vermeers are genre scenes. In addition to these paintings by Vermeer, the Frick Collection has works by Frans Hals, Rembrandt, and Meyndert Hobbema.
<param ve-map center="Q60" zoom="8" prefer-geojson>


## Multiple viewers

Multiple viewers may be defined for a single paragraph of text.  The first viewer defined is displayed as the default viewer.  
Others are selectable using icons displayed in the top right margin of the paragraph.
<param ve-image 
       label="Capsicum annuum 'Habanero'"
       manifest="https://ids.si.edu/ids/manifest/ark:/65665/m306712a081ec0459b90083f05d35455ec">
<param ve-map center="Q36600" zoom="11">

## Timeline

We recommend using a [Knight Lab Timeline](https://timeline.knightlab.com/) visualization to provide in-depth information about a specific topic that would otherwise interrupt the flow of the narrative. Beginners can create a timeline using nothing more than a Google spreadsheet. The new version of Timeline supports the many [media types.](https://timeline.knightlab.com/docs/media-types.html)
<param ve-knightlab-timeline source="1Fa2DWfjiq1scmC7Ffv4kF5kDfUwDTRftNfjwt0jNdv0&">

## Map with Geospatial Data

Geospatial Conservation Assessment ([GeoCat](https://www.gbif.org/tool/81755/geocat-geospatial-conservation-assessment-tool)) maps and Red List descriptions of the conservation status of 185 species are being produced. For example, data from over 200 herbarium specimens found in 20 institutions suggest that _Heliconia bihai_ from the <span data-click-map-flyto="18.005438, -66.612474,5.8">Caribbean</span> and <span data-click-map-flyto="1.069952, -60.720456, 4.6">northern South America</span> is of “Least Concern” for conservation. Whereas the six available specimens of the very closely related species _[Heliconia aurea](http://www.plantsoftheworldonline.org/taxon/urn:lsid:ipni.org:names:119303-2)_ from <span data-click-map-flyto="9.036443, -69.729927, 7.3">Colombia and Venezuela</span> indicate that it is “Vulnerable” and at risk of extinction, most likely due to habitat alteration, degradation, and destruction.
<param ve-map center="-14.481277, -41.419781" zoom="3.8" marker-type="circle" stroke-width="0" fill-opacity="1" label="Populations of Heliconia aurea (magenta) and Heliconia bihai (green) based on data from herbarium specimens.">
<param ve-map-layer geojson active title="Heliconia aurea (magenta)" url="/data/heliconia-aurea.tsv" fill="#D11141" radius="6">  
<param ve-map-layer geojson active title="Heliconia bihai (green)" url="/data/heliconia-bihai.tsv" radius="4.5" fill="#009900">

## Map with GeoJSON Files

Archaeological evidence suggests that cassava became an important food staple for several ancient cultures in present-day Peru, including the <span eid="Q13341477">Chavin</span> (1000–200 BCE), <span eid="Q210570">Nazca</span> (200 BCE–600 CE), <span eid="Q208188">Moche</span> (250–750 CE), and <span eid="Q901198">Chimú</span> (1000–1470 CE).
<param ve-map basemap="Esri_WorldPhysical" title="Locations of Pre-Columbian Andean civilizations: Nazca (magenta), Moche and Moche Influence (purple), and Chimú (yellow)." center="-10.398459529701169, -75.35486070351776" zoom="5" marker-type="none" stroke="none">
<param ve-map-layer geojson active url="cassava_leaves.json" title="Cassava leaves">
<param ve-map-layer geojson active url="Peru_Nazca_Moche_Chimor.json" title="Pre-Columbian Andean civilizations">

# References

[^1]: [Wikipedia: Girl with a Pearl Earring](https://en.wikipedia.org/wiki/Girl_with_a_Pearl_Earring)

