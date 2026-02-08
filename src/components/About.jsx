export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-100 flex flex-col md:flex-row gap-8 max-w-6xl mx-auto px-4">
      <div className="flex-1">
        <h3 className="text-3xl font-bold mb-4">About Imara Analytical Laboratories</h3>
        <p className="mb-4">
          Imara Analytical Laboratories (IAL) is a leading private testing laboratory headquartered in Kericho, Kenya, serving clients across East Africa. We specialize in providing comprehensive laboratory services for soil, water, effluent, fertilizers, plant tissue, human food, and animal feed.
        </p>
        <p className="mb-4">
          IAL partners with a wide range of stakeholders, including agricultural producers, tea and coffee farmers, water management authorities, and agribusinesses, delivering timely and reliable laboratory solutions. Our laboratory leverages a combination of skilled expertise and advanced technology to ensure high-quality testing and actionable advisory services.
        </p>
        <p>
          Committed to excellence, IAL offers affordable, accurate, and rapid testing services while providing hands-on guidance to support informed decision-making. Whether through contract testing or customized analyses, Imara Analytical Laboratories is your trusted turnkey laboratory partner.
        </p>
      </div>

      <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-2xl font-semibold mb-2">Mission</h3>
        <p className="mb-4">Provide affordable laboratory testing services with commitment to customer satisfaction.</p>
        <h3 className="text-2xl font-semibold mb-2">Vision</h3>
        <p className="mb-4">Provide timely, innovative and quality laboratory services.</p>
        <h3 className="text-2xl font-semibold mb-2">Core Values</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li><strong>Integrity:</strong> We build trust through transparency, ethical practices, and accountability.</li>
          <li><strong>Innovation:</strong> We embrace advanced techniques and ISO/IEC 17025:2017 standards to deliver precise, reliable results.</li>
          <li><strong>Excellence:</strong> We pursue the highest standards in testing and advisory services.</li>
          <li><strong>Reliability:</strong> Our clients can depend on us for timely, consistent, and accurate results.</li>
          <li><strong>Customer Focus:</strong> We tailor solutions to empower informed, confident decisions.</li>
        </ul>
      </div>
    </section>
  );
}
