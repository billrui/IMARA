export default function Hero() {
  return (
    <section id="hero" className="relative bg-blue-900 text-white py-32 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Imara Analytical Laboratories</h1>
        <p className="mb-6 text-lg md:text-xl">
          Reliable & Affordable Laboratory Testing Services<br />
          Soil, Water, Fertilizer, Plant Tissue, Food & Animal Feed Analysis
        </p>
        <a href="#services" className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-md inline-block">View Our Services</a>
      </div>

      <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20">
          <path d="M0,80 C300,120 900,0 1200,40 L1200,120 L0,120 Z" fill="#ffffff"/>
        </svg>
      </div>
    </section>
  );
}
