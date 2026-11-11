/**
 * THE LAST SIGNAL — NASA Space Apps Challenge 2026
 * Team ASTRAVYN
 * main.js — Navigation, Stars, Particles, Modals, Scroll Animations
 */

'use strict';

/* ============================================================
   EQUIPMENT DATA — Full profiles for all 10 pieces
   ============================================================ */
const EQUIPMENT_DATA = {
  'apollo-lm': {
    title: 'Apollo Lunar Module Descent Stages',
    mission: 'Apollo Program',
    dateRange: '1969 – 1972',
    image: 'images/apollo-lm.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg/640px-Apollo_11_Lunar_Module_Eagle_in_landing_configuration_in_lunar_orbit_from_the_Command_and_Service_Module_Columbia.jpg',
    statusBadge: 'Resting on the Moon',
    statusClass: 'status-resting',
    profile: `The Apollo Lunar Module (LM) was humanity's first true spacecraft — a vessel designed exclusively to operate in the vacuum of space and on the surface of another world. Unlike anything built before, it had no aerodynamic profile, no need for streamlining. It was brutally functional, beautifully alien.

Each LM consisted of two stages: the descent stage (which served as the landing platform) and the ascent stage (which carried astronauts back to lunar orbit). When the mission was done and the astronauts returned to the Command Module, the ascent stage was jettisoned — sometimes deliberately crashed into the Moon to register seismic data. But the descent stages remained exactly where they landed.

<strong>Six descent stages rest on the Moon today:</strong>
<ul>
  <li><strong>Eagle (Apollo 11)</strong> — Tranquility Base, Sea of Tranquility (July 20, 1969)</li>
  <li><strong>Intrepid (Apollo 12)</strong> — Ocean of Storms (November 19, 1969)</li>
  <li><strong>Antares (Apollo 14)</strong> — Fra Mauro Highlands (February 5, 1971)</li>
  <li><strong>Falcon (Apollo 15)</strong> — Hadley–Apennine (July 30, 1971)</li>
  <li><strong>Orion (Apollo 16)</strong> — Descartes Highlands (April 21, 1972)</li>
  <li><strong>Challenger (Apollo 17)</strong> — Taurus–Littrow (December 11, 1972)</li>
</ul>

NASA's Lunar Reconnaissance Orbiter (LRO) has photographed all six landing sites from orbit, clearly showing the descent stages and even the astronauts' footpaths pressed into the regolith — preserved for millennia in the absence of wind or weather.

These are not mere debris. They are time capsules — the first structures ever built by human hands on another world. The flag at Tranquility Base likely fell when the ascent stage's engine ignited. The descent stages remain upright, silent monuments to a brief moment when humanity reached beyond itself and landed on the Moon.`,
  },

  'lunar-rover': {
    title: 'Apollo Lunar Roving Vehicle (LRV)',
    mission: 'Apollo 15, 16 & 17',
    dateRange: '1971 – 1972',
    image: 'images/lunar-rover.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Apollo_15_Lunar_Rover.jpg/640px-Apollo_15_Lunar_Rover.jpg',
    statusBadge: '3 Rovers on the Moon',
    statusClass: 'status-resting',
    profile: `The Lunar Roving Vehicle was a battery-powered four-wheel-drive car built for the Moon. It looked like a dune buggy assembled from wire mesh, gold foil, and optimism — but it performed beyond all expectations, transforming what astronauts could explore in a single visit.

<strong>The three missions and their rovers:</strong>
<ul>
  <li><strong>Apollo 15 (July 1971)</strong> — Dave Scott and Jim Irwin drove 27.9 km near Hadley Rille at the base of the Apennine Mountains. They collected the famous Genesis Rock — a piece of the Moon's original crust, 4.5 billion years old.</li>
  <li><strong>Apollo 16 (April 1972)</strong> — John Young and Charlie Duke drove 26.7 km across the Descartes Highlands. The rover's TV camera transmitted live images of their EVAs back to Earth.</li>
  <li><strong>Apollo 17 (December 1972)</strong> — Gene Cernan and Harrison Schmitt (the only geologist to walk on the Moon) drove 35.9 km through the Taurus–Littrow valley. They discovered orange soil — volcanic glass beads 3.64 billion years old.</li>
</ul>

<strong>Key statistics:</strong>
<ul>
  <li>Top speed: ~17 km/h (Cernan set an unofficial lunar land speed record)</li>
  <li>Combined distance driven: ~90.4 km across all three missions</li>
  <li>Weight: 210 kg (Earth weight), folded to fit inside the LM's descent stage quadrant</li>
  <li>Range: Limited by life support — astronauts had to stay within walking distance of the LM as a safety margin</li>
</ul>

Each rover was left at its landing site when the mission ended. They remain parked where the astronauts left them, cameras and tools still aboard, tires pressed into dust that hasn't moved in over fifty years. The LRO has photographed all three, tiny bright specks against the grey terrain — patient, waiting, perhaps for whoever comes next.`,
  },

  'alsep': {
    title: 'Apollo Lunar Surface Experiments Package (ALSEP)',
    mission: 'Apollo 12–16',
    dateRange: '1969 – 1977',
    image: 'images/alsep.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/ALSEP_AS14-67-9336HR.jpg/640px-ALSEP_AS14-67-9336HR.jpg',
    statusBadge: 'Silent since 1977',
    statusClass: 'status-silent',
    profile: `The Apollo Lunar Surface Experiments Package was the scientific heart of each Apollo landing. While astronauts explored visible terrain, ALSEP listened — to the Moon's interior, its magnetic field, its thin atmosphere, the endless rain of solar wind particles.

Crucially, ALSEP was designed to work long after the astronauts left. Each station was nuclear-powered by a Radioisotope Thermoelectric Generator (RTG) using plutonium-238, designed to operate for years. And they did.

<strong>ALSEP was deployed at five sites (Apollo 11 had a simpler EASEP package):</strong>
<ul>
  <li>Apollo 12 — Ocean of Storms</li>
  <li>Apollo 14 — Fra Mauro</li>
  <li>Apollo 15 — Hadley–Apennine</li>
  <li>Apollo 16 — Descartes Highlands</li>
  <li>Apollo 17 — Taurus–Littrow</li>
</ul>

<strong>Instruments included:</strong>
<ul>
  <li><strong>Passive Seismic Experiment (PSE)</strong> — detected moonquakes, meteor impacts, even the crashing of discarded equipment deliberately targeted at the surface</li>
  <li><strong>Active Seismic Experiment (ASE)</strong> — used small explosions to probe the Moon's crust</li>
  <li><strong>Magnetometers</strong> — mapped the Moon's ancient, faded magnetic field</li>
  <li><strong>Heat Flow Experiment</strong> — measured heat escaping from the Moon's interior (revealing it was still geologically warm)</li>
  <li><strong>Solar Wind Spectrometer</strong> — analyzed particles streaming from the Sun</li>
</ul>

The stations transmitted data continuously. Scientists worldwide received a steady stream of knowledge from the lunar surface — moonquake records, impact detections, thermal measurements — for years after the last astronaut left in December 1972.

Then, on <strong>September 30, 1977</strong>, NASA shut off the receivers. Budget pressures and competing priorities ended the program. The stations themselves likely still function — their RTGs producing power, their instruments sensing the Moon — but no one is listening anymore. They transmit into silence, their signals traveling 384,000 km to find no one home.`,
  },

  'retroreflectors': {
    title: 'Lunar Laser Retroreflectors',
    mission: 'Apollo 11, 14, 15 & Soviet Luna 17, 21',
    dateRange: '1969 – Present (Still Active)',
    image: 'images/retroreflectors.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/ALSEP_-_Lunar_laser_ranging_retroreflector.jpg/640px-ALSEP_-_Lunar_laser_ranging_retroreflector.jpg',
    statusBadge: '⚡ STILL IN USE TODAY',
    statusClass: 'status-active',
    profile: `Of all the equipment left on the Moon, the retroreflectors are unique: they are still being used right now. Tonight, observatories around the world will fire laser pulses at the Moon and measure the time it takes for the light to bounce back — calculating the Earth-Moon distance to millimeter precision.

A retroreflector is deceptively simple: an array of corner-cube prisms that reflect light directly back toward its source, regardless of angle. No power required. No maintenance possible. Just physics, working perfectly for over fifty years.

<strong>Five retroreflector arrays rest on the Moon:</strong>
<ul>
  <li><strong>Apollo 11</strong> — Tranquility Base (100 corner-cube prisms)</li>
  <li><strong>Apollo 14</strong> — Fra Mauro (100 corner-cube prisms)</li>
  <li><strong>Apollo 15</strong> — Hadley–Apennine (300 corner-cube prisms, largest array)</li>
  <li><strong>Luna 17 / Lunokhod 1</strong> — Soviet lunar rover (French-built retroreflector)</li>
  <li><strong>Luna 21 / Lunokhod 2</strong> — Soviet lunar rover (French-built retroreflector)</li>
</ul>

<strong>What we've learned from decades of ranging:</strong>
<ul>
  <li>The Moon is moving away from Earth at ~3.8 cm per year</li>
  <li>The Moon has a fluid outer core (wobbles detected in its orbit)</li>
  <li>General relativity has been tested to extraordinary precision</li>
  <li>The Moon is not perfectly spherical — its interior mass distribution is uneven</li>
  <li>Gravitational constants are verified to be stable across decades</li>
</ul>

The Apache Point Observatory in New Mexico, the Observatoire de la Côte d'Azur in France, and observatories in Italy, Germany, and China regularly bounce lasers off these reflectors. Each laser pulse contains 10^17 photons; only a few hundred return. But that's enough.

The retroreflectors are, in a sense, the most productive scientific instruments humanity has ever left anywhere. Placed in 1969, still generating new science in 2026. The Apollo 11 retroreflector has been in continuous scientific use for over 57 years — longer than any experiment in human history.`,
  },

  'spirit': {
    title: 'Mars Exploration Rover Spirit',
    mission: 'Mars Exploration Rover Mission (MER-A)',
    dateRange: 'June 10, 2003 – March 22, 2010',
    image: 'images/spirit.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mars_Exploration_Rover.jpg/640px-Mars_Exploration_Rover.jpg',
    statusBadge: 'Silent since March 22, 2010',
    statusClass: 'status-silent',
    profile: `Spirit was designed for a 90-day mission. It lasted 2,208 Martian days — over six years. It was the little rover that refused to quit.

<strong>The journey:</strong>
Spirit launched on June 10, 2003, and landed in Gusev Crater on January 4, 2004 — a region scientists hoped was once a lake. Using airbags to cushion its landing (a cocoon of inflated rubber that bounced across the Martian surface before deflating), Spirit rolled out onto alien soil for the first time.

For years it roamed, its six wheels leaving tracks across red dust and volcanic rock. Spirit climbed the Columbia Hills, naming features after the crew of the Space Shuttle Columbia lost in 2003. It discovered rocks altered by ancient water — solid evidence that Mars was once warmer, wetter, and potentially habitable.

<strong>Major discoveries:</strong>
<ul>
  <li>Rocks in the Columbia Hills showed clear signs of alteration by liquid water</li>
  <li>Silica-rich soil near a feature called "Home Plate" — possibly formed by hot springs or steam vents, environments where life could have existed</li>
  <li>Evidence of ancient volcanic activity and explosive eruptions</li>
</ul>

<strong>The end:</strong>
In May 2009, Spirit's right front wheel — which had been dragging since 2006 — caused the rover to become embedded in soft, iron sulfate-rich soil nicknamed "Troy." Engineers spent months attempting to free it. They couldn't. Spirit became a stationary research platform.

Then came the Martian winter. Without enough sunlight to charge its batteries, Spirit fell into hibernation. NASA maintained hope — previous Martian winters had been survived. But on March 22, 2010, contact was lost for the last time. Spirit was not heard from again.

She traveled <strong>7.73 kilometers</strong> across the Martian surface. She sits today in Gusev Crater, her solar panels likely covered in dust, wheels sunk in soil, cameras still pointed at a sky she no longer reports to Earth.`,
  },

  'opportunity': {
    title: 'Mars Exploration Rover Opportunity',
    mission: 'Mars Exploration Rover Mission (MER-B)',
    dateRange: 'July 7, 2003 – June 10, 2018',
    image: 'images/opportunity.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mars_Exploration_Rover.jpg/640px-Mars_Exploration_Rover.jpg',
    statusBadge: 'Silent since June 10, 2018',
    statusClass: 'status-silent',
    profile: `Opportunity landed on Mars on January 25, 2004 — three weeks after Spirit. Its design was identical, its mission the same. But Opportunity's story would become one of the greatest sagas in the history of exploration.

It was designed for 90 days. It lasted <strong>5,111 Martian days — nearly 15 years</strong>.

<strong>Landing and early discoveries:</strong>
Opportunity landed in Meridiani Planum, a region chosen for its flat terrain and spectral signature suggesting hematite — a mineral often formed in the presence of water. Within the first weeks, it found proof: tiny gray spheres embedded in the rock, nicknamed "Martian blueberries." These were hematite concretions, formed when minerals precipitate out of groundwater over long periods. Mars had once been soaked.

<strong>The long drive:</strong>
Opportunity drove and drove. It explored Eagle Crater, Endurance Crater, Victoria Crater, and finally Endeavour Crater — a 22-kilometer wide ancient basin that became its home for the last eight years of its mission. At Endeavour's rim, Opportunity found clay minerals that form only in neutral pH water — the best evidence yet that ancient Mars could have supported life.

<strong>Key discoveries:</strong>
<ul>
  <li>Hematite spheres ("blueberries") — proof of past water saturation</li>
  <li>Layered sedimentary rock — deposited by ancient standing water</li>
  <li>Clay minerals at Endeavour Crater — neutral pH water, potentially habitable</li>
  <li>Total distance traveled: <strong>45.16 kilometers</strong> — a record for any off-Earth vehicle (until surpassed by China's Yutu-2 rover on the Moon)</li>
</ul>

<strong>The end:</strong>
On June 10, 2018, a planet-wide dust storm engulfed Mars. Opportunity's solar panels, blanketed by dust, could no longer generate power. The rover went silent. NASA attempted contact for eight months — over 1,000 times. On February 13, 2019, the agency declared the mission over.

Opportunity's final message, before the storm took her, contained a measurement of low power and a report of darkness. Some interpreted it as: <em>"My battery is low and it's getting dark."</em>

She sits in Perseverance Valley on the rim of Endeavour Crater, tilted slightly, facing east — perhaps positioned to catch the morning sun she never got to use again.`,
  },

  'sojourner': {
    title: 'Sojourner Rover',
    mission: 'Mars Pathfinder',
    dateRange: 'December 4, 1996 – September 27, 1997',
    image: 'images/sojourner.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Sojourner_on_Mars_PIA01122.jpg/640px-Sojourner_on_Mars_PIA01122.jpg',
    statusBadge: 'Silent since Sept 27, 1997',
    statusClass: 'status-silent',
    profile: `Sojourner was the first rover ever to operate on another planet. When it rolled off its lander's ramp onto Martian soil on July 6, 1997 — two days after Pathfinder's airbag landing — it crossed a threshold that no machine had crossed before.

It weighed just 10.6 kilograms. It was about the size of a microwave oven. Its top speed was 1 centimeter per second. And it changed everything.

<strong>The mission:</strong>
Sojourner was a technology demonstration — a proof of concept that a small, semi-autonomous rover could survive on Mars and return useful data. It exceeded every expectation. Using its Alpha Proton X-ray Spectrometer (APXS), it analyzed the composition of rocks around the Ares Vallis landing site — a region where ancient floods had deposited rocks from across a wide area of Mars.

The rocks Sojourner examined suggested a diverse geological history, with compositions similar to andesite — volcanic rock common on Earth but unexpected on Mars. This hinted at volcanic processes more complex than previously imagined.

<strong>Operations:</strong>
<ul>
  <li>Landed: July 4, 1997 (Independence Day landing was deliberate)</li>
  <li>Planned mission: 7 days (minimum), 30 days (goal)</li>
  <li>Actual mission: 83 days</li>
  <li>Total distance traveled: approximately 100 meters</li>
  <li>Rocks analyzed: 16</li>
  <li>Images taken: over 550 by Sojourner, over 16,000 by Pathfinder</li>
</ul>

<strong>End of mission:</strong>
On September 27, 1997, contact with Mars Pathfinder was lost — likely due to battery failure from the extreme cold of the Martian night. Sojourner, designed to maintain radio contact only with Pathfinder (not directly with Earth), would have continued driving in a preprogrammed search pattern, waiting for a lander that could no longer respond.

Sojourner sits today near the Carl Sagan Memorial Station (the renamed Pathfinder lander) in Ares Vallis, Mars. The site where it proved that rovers could work — the site that made Spirit and Opportunity possible, that made Curiosity and Perseverance possible — that made all of it possible.`,
  },

  'pathfinder': {
    title: 'Mars Pathfinder Lander',
    mission: 'Mars Pathfinder',
    dateRange: 'December 4, 1996 – September 27, 1997',
    image: 'images/pathfinder.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Mars_Pathfinder_Lander.jpg/640px-Mars_Pathfinder_Lander.jpg',
    statusBadge: 'Silent since Sept 27, 1997',
    statusClass: 'status-silent',
    profile: `Mars Pathfinder was NASA's audacious return to Mars after a 21-year gap. The Viking landers had touched down in 1976. Then, silence. Budget cuts, failed missions, and years of waiting. When Pathfinder launched in December 1996, it carried not just instruments, but the hopes of a space program eager to prove that "faster, better, cheaper" could actually work.

<strong>The revolutionary landing system:</strong>
Instead of the complex retrorocket-and-leg system used by Viking, Pathfinder used airbags — a cocoon of inflated cushions that allowed the spacecraft to slam into the Martian surface at ~65 km/h, bounce up to 15 meters into the air, bounce again, and again, before finally rolling to a stop. It was an absurd-looking approach. It worked perfectly.

<strong>What Pathfinder achieved:</strong>
<ul>
  <li>Landed July 4, 1997, in Ares Vallis — a ancient catastrophic flood channel</li>
  <li>Demonstrated the airbag landing system that would later be used by Spirit and Opportunity</li>
  <li>Deployed Sojourner, the first Mars rover</li>
  <li>Returned 2.3 billion bits of data to Earth</li>
  <li>Sent back over 16,500 images from the lander camera</li>
  <li>Recorded atmospheric data: temperature, pressure, wind speed — first detailed Martian meteorological record since Viking</li>
  <li>Measured dust devil activity and identified clouds in the Martian atmosphere</li>
</ul>

<strong>Scientific return:</strong>
The rocks examined by Sojourner and imaged by Pathfinder suggested that the region had been covered by catastrophic floods billions of years ago — floods so massive they would have dwarfed any flood in Earth's history. The rock compositions hinted at a Mars once more geologically complex, potentially once bearing liquid water on its surface.

Pathfinder was renamed the Carl Sagan Memorial Station after Sagan's death in December 1996. The astronomer who had advocated most passionately for the exploration of Mars had his name inscribed on the lander that reinvigorated that exploration.

Contact was lost September 27, 1997 — suspected battery failure. The lander and its small companion sit in Ares Vallis, Mars, a monument to what was possible when ambition was paired with ingenuity.`,
  },

  'phoenix': {
    title: 'Phoenix Mars Lander',
    mission: 'Phoenix Mars Mission',
    dateRange: 'August 4, 2007 – November 2, 2008',
    image: 'images/phoenix.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Phoenix_landing_leg.jpg/640px-Phoenix_landing_leg.jpg',
    statusBadge: 'Silent since Nov 2, 2008',
    statusClass: 'status-silent',
    profile: `Phoenix went to the most forbidding place on Mars — the arctic north — to search for something specific: water ice. It found it, within centimeters of the surface, and confirmed that liquid water had once touched the Martian arctic soil. It was one of the most significant discoveries in planetary science.

<strong>Landing in the arctic:</strong>
Phoenix landed on May 25, 2008, in the Vastitas Borealis region — the northern polar plains of Mars. Unlike previous landers that used airbags, Phoenix used a traditional thruster-braked landing (the same approach NASA would later use for Curiosity's sky crane). The landing was flawless, broadcast live to anxious scientists worldwide.

<strong>Discovering water ice:</strong>
Phoenix's robotic arm dug trenches in the Martian soil. When chunks of bright white material were exposed, then disappeared over four days — they sublimated (evaporated directly from solid to gas) — the team confirmed it was water ice. Not CO₂ ice. Water. The first time water ice was directly confirmed and touched by a spacecraft on Mars.

<strong>Key discoveries:</strong>
<ul>
  <li><strong>Water ice confirmed</strong> — directly observed and sampled from the Martian arctic subsurface</li>
  <li><strong>Perchlorate detected</strong> — a reactive chemical that could be toxic to Earth-like life, but also potentially an energy source for other forms of life</li>
  <li><strong>Soil chemistry analysis</strong> — the soil had a pH of 7-8 (slightly alkaline), potentially compatible with some Earth organisms</li>
  <li><strong>Snowfall observed</strong> — Phoenix detected snow falling from clouds, though it evaporated before reaching the surface</li>
  <li><strong>Climate history</strong> — evidence that liquid water had interacted with the soil in the relatively recent past</li>
</ul>

<strong>End of mission:</strong>
Phoenix's mission depended entirely on solar power — and the Martian arctic winter meant diminishing sunlight. As autumn deepened, power levels dropped. The last successful communication was November 2, 2008. Phoenix's solar panels likely collapsed under the weight of dry ice accumulating during the polar winter.

The Mars Reconnaissance Orbiter photographed Phoenix's landing site in 2010, showing the lander — dusty, solar panels likely broken — still standing where it had made history. A quiet monument in the Martian arctic, where it found ice and taught us that the northern plains of Mars were once, long ago, touched by water.`,
  },

  'insight': {
    title: 'InSight Mars Lander',
    mission: 'Interior Exploration using Seismic Investigations',
    dateRange: 'May 5, 2018 – December 15, 2022',
    image: 'images/insight.jpg',
    imageFallback: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/InSight_lander_artists_rendition.jpg/640px-InSight_lander_artists_rendition.jpg',
    statusBadge: 'Silent since Dec 15, 2022',
    statusClass: 'status-silent',
    profile: `InSight listened. While every other Mars mission explored the surface, InSight pressed its ear to the ground and listened to the deep interior of an entire planet. It heard marsquakes. It heard meteor impacts. It heard the slow heartbeat of a world that is not, geologically, as dead as we thought.

<strong>The mission:</strong>
InSight (Interior Exploration using Seismic Investigations, Geodesy and Heat Transport) landed on November 26, 2018, on the Elysium Planitia — an almost featureless plain chosen precisely because it was boring. InSight didn't need interesting terrain. It needed quiet.

<strong>Instruments:</strong>
<ul>
  <li><strong>SEIS (Seismometer)</strong> — built by France's CNES, the most sensitive seismometer ever deployed, so sensitive it could detect ground motion smaller than a hydrogen atom</li>
  <li><strong>HP³ (Heat Flow and Physical Properties Package)</strong> — a self-hammering "mole" designed to burrow 5 meters into the Martian soil to measure internal heat. It struggled with an unexpected soil structure and reached only about 40 cm, but returned valuable data about the near-surface regolith</li>
  <li><strong>RISE (Rotation and Interior Structure Experiment)</strong> — tracked InSight's precise position using radio signals to measure Mars's wobble, revealing the size and state of the Martian core</li>
</ul>

<strong>What InSight discovered:</strong>
<ul>
  <li><strong>1,319 marsquakes detected</strong> — Mars is seismically active, with quakes ranging from magnitude 1 to magnitude 5</li>
  <li><strong>Mars's core is liquid</strong> — RISE measurements revealed a surprisingly large (1,800–1,850 km radius), liquid outer core</li>
  <li><strong>Marsquake detection</strong> — including a magnitude 5 quake in May 2022, the largest ever recorded on another planet</li>
  <li><strong>Meteor impacts detected seismically</strong> — before visually confirmed by orbiters</li>
  <li><strong>Mysterious magnetic pulses</strong> — detected at midnight local time, origin still unknown</li>
  <li><strong>Dust devil activity</strong> — thousands detected via pressure and magnetic sensors</li>
</ul>

<strong>End of mission:</strong>
InSight's solar panels accumulated dust over four years, reducing power output. Unlike Opportunity, InSight had no wheel-spinning trick to clear the panels. Despite a clever sand-trickling method (using the robot arm to drop Martian sand near the panels, hoping the wind would carry dust away — which worked partially), the inevitable arrived.

On December 15, 2022, InSight's final communication was received. Its last image, sent hours before silence, showed its own dust-covered solar panel — a farewell selfie.

InSight sits in Elysium Planitia today, its seismometer still on the ground, still perhaps feeling the faint tremors of a living world — but no longer reporting them home.`,
  },
};

/* ============================================================
   STAR FIELD ANIMATION
   ============================================================ */
function initStarField() {
  const canvas = document.getElementById('stars-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let stars = [];
  let animationId;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    createStars();
  }

  function createStars() {
    stars = [];
    const count = 200;
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 0.5 + Math.random() * 2,          // 0.5 – 2.5 px
        opacity: 0.2 + Math.random() * 0.8,
        opacityDelta: (Math.random() * 0.02 + 0.005) * (Math.random() < 0.5 ? 1 : -1),
        speedX: (Math.random() - 0.5) * 0.08,   // slow horizontal drift
        speedY: (Math.random() - 0.5) * 0.08,   // slow vertical drift
        color: randomStarColor(),
      });
    }
  }

  function randomStarColor() {
    const palette = [
      'rgba(255,255,255,',    // white
      'rgba(200,220,255,',    // cool blue-white
      'rgba(255,240,200,',    // warm yellow-white
      'rgba(0,229,255,',      // accent cyan
      'rgba(180,180,255,',    // soft blue
    ];
    return palette[Math.floor(Math.random() * palette.length)];
  }

  function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    stars.forEach(star => {
      // Update position (drift)
      star.x += star.speedX;
      star.y += star.speedY;

      // Wrap around edges
      if (star.x < 0) star.x = canvas.width;
      if (star.x > canvas.width) star.x = 0;
      if (star.y < 0) star.y = canvas.height;
      if (star.y > canvas.height) star.y = 0;

      // Update opacity (twinkle)
      star.opacity += star.opacityDelta;
      if (star.opacity >= 1) { star.opacity = 1; star.opacityDelta *= -1; }
      if (star.opacity <= 0.1) { star.opacity = 0.1; star.opacityDelta *= -1; }

      // Draw star
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fillStyle = `${star.color}${star.opacity.toFixed(2)})`;
      ctx.fill();

      // Add a subtle glow for larger stars
      if (star.size > 1.5) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
        const glow = ctx.createRadialGradient(star.x, star.y, 0, star.x, star.y, star.size * 2.5);
        glow.addColorStop(0, `${star.color}${(star.opacity * 0.3).toFixed(2)})`);
        glow.addColorStop(1, `${star.color}0)`);
        ctx.fillStyle = glow;
        ctx.fill();
      }
    });

    animationId = requestAnimationFrame(drawStars);
  }

  resizeCanvas();
  drawStars();

  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      cancelAnimationFrame(animationId);
      resizeCanvas();
      drawStars();
    }, 200);
  });
}

/* ============================================================
   PARTICLE SYSTEM (hero section — floating cyan/violet dots)
   ============================================================ */
function initParticleSystem() {
  const hero = document.getElementById('home');
  if (!hero) return;

  const container = document.createElement('div');
  container.className = 'particle-container';
  container.setAttribute('aria-hidden', 'true');
  hero.appendChild(container);

  const PARTICLE_COUNT = 40;
  const particles = [];

  function createParticle() {
    const p = document.createElement('span');
    p.className = 'hero-particle';

    const isCyan = Math.random() < 0.6;
    const size = 2 + Math.random() * 4; // 2–6 px
    const startX = Math.random() * 100; // vw %
    const duration = 6 + Math.random() * 12; // seconds
    const delay = Math.random() * -15; // stagger start times

    p.style.cssText = `
      left: ${startX}%;
      width: ${size}px;
      height: ${size}px;
      background: ${isCyan ? '#00e5ff' : '#9c27b0'};
      box-shadow: 0 0 ${size * 2}px ${isCyan ? '#00e5ff' : '#9c27b0'};
      animation-duration: ${duration}s;
      animation-delay: ${delay}s;
    `;
    container.appendChild(p);
    particles.push(p);
    return p;
  }

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    createParticle();
  }
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function initNavigation() {
  const nav = document.querySelector('nav') || document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger') || document.querySelector('.nav-toggle');
  const navLinks = document.querySelectorAll('a[href^="#"]');
  const navItems = document.querySelectorAll('.nav-links a, nav ul a, nav a');

  /* ---- Hamburger menu ---- */
  const mobileNav = document.querySelector('.nav-mobile');
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      if (nav) nav.classList.toggle('nav-open');
      hamburger.classList.toggle('active');
      hamburger.classList.toggle('open');
      if (mobileNav) mobileNav.classList.toggle('open');
      const isOpen = hamburger.classList.contains('open');
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (nav) nav.classList.remove('nav-open');
        hamburger.classList.remove('active');
        hamburger.classList.remove('open');
        if (mobileNav) mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close on outside click
    document.addEventListener('click', e => {
      if ((nav && nav.classList.contains('nav-open') || (mobileNav && mobileNav.classList.contains('open'))) &&
          !e.target.closest('nav') &&
          !e.target.closest('.nav-mobile') &&
          !e.target.closest('.hamburger')) {
        if (nav) nav.classList.remove('nav-open');
        hamburger.classList.remove('active');
        hamburger.classList.remove('open');
        if (mobileNav) mobileNav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---- Smooth scroll ---- */
  navLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const navHeight = nav ? nav.offsetHeight : 0;
          const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 10;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      }
    });
  });

  /* ---- Sticky nav opacity on scroll ---- */
  if (nav) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      if (scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    }, { passive: true });
  }

  /* ---- Active nav highlight via IntersectionObserver ---- */
  const sections = document.querySelectorAll('section[id], div[id]');
  if (sections.length && navItems.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${id}`) {
              item.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }
}

/* ============================================================
   SCROLL ANIMATIONS (IntersectionObserver)
   ============================================================ */
function initScrollAnimations() {
  /* Fade-in-up elements */
  const fadeElements = document.querySelectorAll('.fade-in-up');

  if (fadeElements.length) {
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    fadeElements.forEach(el => fadeObserver.observe(el));
  }

  /* Equipment cards — staggered delay */
  const equipmentCards = document.querySelectorAll('.equipment-card, .card');

  if (equipmentCards.length) {
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Find position among siblings for stagger
          const siblings = Array.from(entry.target.parentElement.children);
          const index = siblings.indexOf(entry.target);
          entry.target.style.transitionDelay = `${index * 80}ms`;
          entry.target.classList.add('visible');
          cardObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    equipmentCards.forEach(card => {
      card.classList.add('fade-in-up');
      cardObserver.observe(card);
    });
  }

  /* Section headings */
  const headings = document.querySelectorAll('section h2, section h3, .section-title');
  if (headings.length) {
    const headObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          headObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    headings.forEach(h => {
      if (!h.classList.contains('fade-in-up')) {
        h.classList.add('fade-in-up');
        headObserver.observe(h);
      }
    });
  }
}

/* ============================================================
   EQUIPMENT MODAL SYSTEM
   ============================================================ */
function initEquipmentModals() {
  const modal = document.getElementById('equipment-modal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close') || modal.querySelector('[data-close-modal]');
  const modalTitle = modal.querySelector('.modal-title') || modal.querySelector('h2');
  const modalMission = modal.querySelector('.modal-mission');
  const modalDateRange = modal.querySelector('.modal-date-range, .modal-dates');
  const modalImage = modal.querySelector('.modal-image img') || modal.querySelector('.modal-img');
  const modalBody = modal.querySelector('.modal-body, .modal-profile, .modal-content-body');
  const modalStatus = modal.querySelector('.modal-status, .status-badge');

  function openModal(key) {
    const data = EQUIPMENT_DATA[key];
    if (!data) {
      console.warn(`No equipment data found for key: "${key}"`);
      return;
    }

    // Populate fields
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalMission) modalMission.textContent = data.mission;
    if (modalDateRange) modalDateRange.textContent = data.dateRange;

    if (modalImage) {
      modalImage.src = data.image;
      modalImage.alt = data.title;
      modalImage.onerror = function () {
        this.src = data.imageFallback;
        this.onerror = null;
      };
    }

    if (modalBody) {
      modalBody.innerHTML = data.profile;
    }

    if (modalStatus) {
      modalStatus.textContent = data.statusBadge;
      // Remove old status classes
      modalStatus.className = modalStatus.className
        .split(' ')
        .filter(c => !c.startsWith('status-'))
        .join(' ');
      if (data.statusClass) {
        modalStatus.classList.add(data.statusClass);
      }
      modalStatus.classList.add('status-badge');
    }

    // Show modal
    modal.classList.add('active', 'open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');

    // Focus management
    if (closeBtn) {
      setTimeout(() => closeBtn.focus(), 50);
    }
  }

  function closeModal() {
    modal.classList.remove('active', 'open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');

    // Return focus to trigger button
    const focused = document.querySelector('[data-opened-modal]');
    if (focused) {
      focused.focus();
      focused.removeAttribute('data-opened-modal');
    }
  }

  // Delegate click on "Read Story" buttons
  document.addEventListener('click', e => {
    const btn = e.target.closest('[data-equipment-key], [data-modal-key], .read-story-btn');
    if (btn) {
      const key = btn.dataset.equipmentKey || btn.dataset.modalKey || btn.dataset.key;
      if (key) {
        // Track which element opened the modal for focus return
        btn.setAttribute('data-opened-modal', 'true');
        openModal(key);
      }
    }
  });

  // Close button
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Click outside modal content to close
  modal.addEventListener('click', e => {
    if (e.target === modal) closeModal();
  });

  // ESC key to close
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Trap focus inside modal
  modal.addEventListener('keydown', e => {
    if (e.key !== 'Tab') return;
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (e.shiftKey) {
      if (document.activeElement === first) { e.preventDefault(); last.focus(); }
    } else {
      if (document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

/* ============================================================
   SCROLL TO TOP BUTTON
   ============================================================ */
function initScrollToTop() {
  // Create button if it doesn't exist
  let btn = document.getElementById('scroll-top-btn') || document.querySelector('.scroll-to-top');

  if (!btn) {
    btn = document.createElement('button');
    btn.id = 'scroll-top-btn';
    btn.className = 'scroll-to-top';
    btn.setAttribute('aria-label', 'Scroll to top');
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
      stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"
      width="20" height="20"><polyline points="18 15 12 9 6 15"/></svg>`;
    document.body.appendChild(btn);
  }

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      btn.classList.add('visible');
    } else {
      btn.classList.remove('visible');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ============================================================
   TIMELINE INTERACTIONS (basic expand/collapse)
   ============================================================ */
function initTimeline() {
  const timelineItems = document.querySelectorAll('.timeline-item, [data-timeline-item]');

  timelineItems.forEach(item => {
    const toggle = item.querySelector('.timeline-toggle, .timeline-year, .timeline-header');
    const content = item.querySelector('.timeline-content, .timeline-detail, .timeline-body');

    if (toggle && content) {
      toggle.style.cursor = 'pointer';
      toggle.setAttribute('role', 'button');
      toggle.setAttribute('tabindex', '0');

      const expand = () => {
        const isOpen = item.classList.contains('expanded');
        // Collapse others
        timelineItems.forEach(other => other.classList.remove('expanded'));
        if (!isOpen) item.classList.add('expanded');
      };

      toggle.addEventListener('click', expand);
      toggle.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); expand(); }
      });
    }
  });

  // Animate timeline items on scroll
  if (timelineItems.length) {
    const tlObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'fade-in-up');
          tlObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    timelineItems.forEach(item => tlObserver.observe(item));
  }
}

/* ============================================================
   LAST WORDS — FICTION DISCLAIMER enforcement
   ============================================================ */
function initLastWords() {
  const lastWordsSection = document.getElementById('last-words');
  if (!lastWordsSection) return;

  // Ensure every fiction card has a visible disclaimer
  const cards = lastWordsSection.querySelectorAll('.fiction-card, .last-words-card, .quote-card');
  cards.forEach(card => {
    if (!card.querySelector('.fiction-label')) {
      const label = document.createElement('div');
      label.className = 'fiction-label';
      label.textContent = '[CREATIVE FICTION — NOT ACTUAL NASA TRANSMISSIONS]';
      card.prepend(label);
    }
  });
}

/* ============================================================
   GENERAL UTILITY — Counter animation for stats
   ============================================================ */
function initCounters() {
  const counters = document.querySelectorAll('[data-count-to]');
  if (!counters.length) return;

  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseInt(el.dataset.countTo, 10);
      const duration = parseInt(el.dataset.countDuration || '1500', 10);
      const start = performance.now();
      countObserver.unobserve(el);

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // ease-out quad
        const eased = 1 - (1 - progress) * (1 - progress);
        el.textContent = Math.floor(eased * target).toLocaleString();
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target.toLocaleString();
      }
      requestAnimationFrame(update);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => countObserver.observe(c));
}

/* ============================================================
   GLASSMORPHISM NAV — dynamic blur on scroll
   ============================================================ */
function initNavGlass() {
  const nav = document.querySelector('nav, .navbar, .site-nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    const opacity = Math.min(window.scrollY / 400, 1);
    // Increase backdrop opacity as user scrolls
    nav.style.setProperty('--nav-bg-opacity', (0.3 + opacity * 0.5).toFixed(2));
  }, { passive: true });
}

/* ============================================================
   CURSOR GLOW (subtle space-themed cursor trail)
   ============================================================ */
function initCursorGlow() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // skip on touch

  const glow = document.createElement('div');
  glow.id = 'cursor-glow';
  glow.setAttribute('aria-hidden', 'true');
  document.body.appendChild(glow);

  let mouseX = -200, mouseY = -200;
  let glowX = -200, glowY = -200;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    glow.style.transform = `translate(${glowX}px, ${glowY}px) translate(-50%, -50%)`;
    requestAnimationFrame(animateGlow);
  }
  animateGlow();
}

/* ============================================================
   SECTION REVEAL on scroll — generic utility
   ============================================================ */
function initSectionReveal() {
  const sections = document.querySelectorAll('section');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('section-visible');
      }
    });
  }, { threshold: 0.05 });

  sections.forEach(s => revealObserver.observe(s));
}

/* ============================================================
   STORY TABS
   ============================================================ */
function initStoryTabs() {
  const tabs = document.querySelectorAll('.story-tab');
  const panels = document.querySelectorAll('.story-panel');
  if (!tabs.length || !panels.length) return;

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.dataset.target || tab.getAttribute('data-target');
      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/* ============================================================
   INIT — DOMContentLoaded
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  initStarField();
  initParticleSystem();
  initNavigation();
  initScrollAnimations();
  initEquipmentModals();
  initScrollToTop();
  initTimeline();
  initLastWords();
  initCounters();
  initNavGlass();
  initCursorGlow();
  initStoryTabs();
  initSectionReveal();

  // Log readiness
  console.info(
    '%c THE LAST SIGNAL %c | NASA Space Apps Challenge 2026 | Team ASTRAVYN',
    'background:#000510;color:#00e5ff;font-weight:bold;padding:4px 8px;',
    'background:#000510;color:#ccc;padding:4px 8px;'
  );
});

/* ============================================================
   EXPORT for quiz.js / timeline.js interop (if needed)
   ============================================================ */
window.TLS = window.TLS || {};
window.TLS.EQUIPMENT_DATA = EQUIPMENT_DATA;
window.TLS.openEquipmentModal = function(key) {
  const btn = document.createElement('button');
  btn.dataset.equipmentKey = key;
  btn.style.display = 'none';
  document.body.appendChild(btn);
  btn.click();
  document.body.removeChild(btn);
};
